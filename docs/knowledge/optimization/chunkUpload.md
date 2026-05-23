---
title: 大文件切片上传
outline: deep
---

:::info Intro

前端上传切片优化以及实现，主要涉及到：大文件分片上传（chunk upload）、并发控制、断点续传、重试机制等

:::

## 场景与痛点

- 大文件上传（如 >100MB）：直接上传会超时或失败
- 网络不稳定：中断后需重传
- 上传速度慢：需要并发分片上传
- 服务端压力大：需要合理控制并发与分片大小

## 实现流程

### 1. 文件切片

`File`、`Blob` 对象有 `.slice()` 方法，可以将文件分割为固定大小的分片（比如：2MB/5MB）

```ts
const CHUNK_SIZE = 5 * 1024 * 1024 // 5MB

const createFileChunks = (file: File, chunkSize = CHUNK_SIZE) => {
  const chunks: Blob[] = []
  let cur = 0
  while (cur < file.size) {
    chunks.push(file.slice(cur, cur + chunkSize))
    cur += chunkSize
  }
  return chunks
}
```

### 2. 生成唯一 `hash` 标识

借助 JS 库 [`⚡ spark-md5`](https://www.npmjs.com/package/spark-md5) —— 一个 浏览器端计算 `MD5` 的库

- 能够对 `大文件` 做 `增量 MD5 计算`
- 不需要一次性把整个文件读入内存
- 它提供两个重要方法：
  - `append(arrayBuffer)`：给 `MD5` 计算器追加一段数据
  - `end()`：结束并返回 `MD5` 字符串

```ts
import SparkMD5 from 'spark-md5'

const generateFileHash = async (chunks: Blob[]) => {
  const spark = new SparkMD5.ArrayBuffer()
  for (const chunk of chunks) {
    const buffer = await chunk.arrayBuffer()
    /** 每一个分片的 buffer 增量追加 */
    spark.append(buffer)
  }
  return spark.end()
}
```

### 3. 上传分片

每个分片通过 `FormData` 上传

```ts
const uploadChunks = async (
  chunks: Blob[],
  fileName: string,
  fileHash: string,
) => {
  const requests = chunks.map((chunk, idx) => {
    const formData = new FormData()
    formData.append('fileChunk', chunk)
    formData.append('fileChunkIndex', idx)
    formData.append('fileName', fileName)
    formData.append('fileHash', fileHash)

    return axios.post('/upload', formData, {
      onUploadProgress: (e) => {
        console.log(
          `Upload progress: ${((e.loaded / e.total) * 100).toFixed(2)}%`,
        )
      },
    })
  })

  await Promise.all(requests)
  console.log('✓ All chunks uploaded successfully!')
}
```

### 4. 合并文件

前端所有分片上传完成后，调用后端 /merge 接口，通知服务端进行文件合并

```ts
const mergeChunks = async (fileName, fileHash, totalChunks) => {
  await axios.post('/merge', { fileName, fileHash, totalChunks })
  console.log('✓ File merged successfully!')
}
```

### 流程总结

```ts
const handleFileUpload = async (file) => {
  // 1. 文件分片
  const chunks = createFileChunks(file)
  // 2. 创建文件 hash
  const fileHash = await generateFileHash(chunks)
  // 3. 分片上传
  await uploadChunks(chunks, file.name, fileHash)
  // 4. 文件合并
  await mergeChunks(file.name, fileHash, chunks.length)
}
```

## 优化点

### 1. 并发控制

使用 `Promise.all` 进行并发上传，但需要限制最大并发数（比如 `5`），避免服务器压力过大

```ts
/**
 * p-limit 是一个用于 JavaScript 和 Node.js 的并发控制库，
 * 能够限制同时执行的异步任务数量；它通过创建一个任务队列来管理并发任务，
 * 当达到设定的并发限制时，后续任务会被阻塞，直到有任务完成
 */
import pLimit from 'p-limit'

const uploadChunks = async (
  chunks: Blob[],
  fileName: string,
  fileHash: string,
) => {
  const limit = pLimit(5) // 限制5个并发

  const requests = chunks.map((chunk, idx) =>
    limit(() => {
      const formData = new FormData()
      formData.append('fileChunk', chunk)
      formData.append('fileChunkIndex', idx)
      formData.append('fileName', fileName)
      formData.append('fileHash', fileHash)

      return axios.post('/upload', formData, {
        onUploadProgress: (e) => {
          console.log(
            `Upload progress: ${((e.loaded / e.total) * 100).toFixed(2)}%`,
          )
        },
      })
    }),
  )

  await Promise.all(requests)
  console.log('✓ All chunks uploaded successfully!')
}
```

### 2. 错误重试

针对失败的分片，进行最多 `N` 次的重试

::: details code
```ts
import pLimit from 'p-limit'

const uploadChunkWithRetry = async (
  chunk: Blob,
  idx: number,
  fileName: string,
  fileHash: string,
  maxRetries: number = 3,
): Promise<any> => {
  let lastError: Error

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const formData = new FormData()
      formData.append('fileChunk', chunk)
      formData.append('fileChunkIndex', idx)
      formData.append('fileName', fileName)
      formData.append('fileHash', fileHash)

      const response = await axios.post('/upload', formData, {
        onUploadProgress: (e) => {
          console.log(
            `Chunk ${idx} (attempt ${attempt + 1}/${maxRetries + 1}) progress: ${(
              (e.loaded / e.total)
              * 100
            ).toFixed(2)}%`,
          )
        },
      })

      console.log(`✓ Chunk ${idx} uploaded successfully`)
      return response
    }
    catch (error) {
      lastError = error as Error
      console.warn(
        `✗ Chunk ${idx} upload failed (attempt ${attempt + 1}/${maxRetries + 1}):`,
        error instanceof Error ? error.message : error,
      )

      if (attempt < maxRetries) {
        // 指数退避延迟: 1s, 2s, 4s
        const delay = Math.pow(2, attempt) * 1000
        console.log(`⏳ Retrying in ${delay}ms...`)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw new Error(
    `✗ Chunk ${idx} failed after ${maxRetries + 1} attempts: ${lastError?.message}`,
  )
}

const uploadChunks = async (
  chunks: Blob[],
  fileName: string,
  fileHash: string,
  maxConcurrent: number = 5,
  maxRetries: number = 3,
) => {
  const limit = pLimit(maxConcurrent)

  const requests = chunks.map((chunk, idx) =>
    limit(() =>
      uploadChunkWithRetry(chunk, idx, fileName, fileHash, maxRetries),
    ),
  )

  await Promise.all(requests)
  console.log('✓ All chunks uploaded successfully!')
}
```
:::

### 3. 断点续传

记录已上传的分片状态，支持中断后继续上传

大致思路如下：

- 以 `fileName_fileHash` 为唯一标识 key 记录对应文件每个分片的上传状态
- 通过本地查询到每个分片的上传状态（也可与服务端协商再开一个查询确认已上传分片记录的接口）
- 浏览器端我们可以借助：`localStorage`（大概 5M 数据量可存）
- 移动端我们可以借助：客户端磁盘存储等
- 在满足检测到分片未成功上传的时机（上传失败或是下次启动检测到本地记录仅有部分成功时），启动从失败的分片位置重新上传
- 每个分片上传成功都需更新本地记录；直到整个文件成功上传并 `merge` 完成拿到服务端答复后，删除本地记录

### 4. 进度条显示

给予用户以等待的分步预期，减少用户焦虑；上面示例代码已包含基础用法，通过 `xhr.upload.onprogress` 事件 / `axios.onUploadProgress` 事件在上传过程中会多次触发，基于此可以实现上传进度百分比显示等功能

### 5. 多线程 web worker 运用

大文件切片上传中最耗 `CPU` 的环节是 **计算文件 Hash**（`spark-md5` 增量计算），在主线程中串行读取并计算大文件的 `MD5` 会阻塞页面渲染和用户交互。通过 `Web Worker` 将 `Hash` 计算切到后台线程并行执行，可以充分利用多核 `CPU`，显著提升整体上传效率。

核心思路：将文件分片按线程数均分，每个 `Worker` 独立计算自己那部分分片的 `MD5`，最后在主线程合并结果。

#### 主线程 (main.ts)

::: details code
```ts
import SparkMD5 from 'spark-md5'

const CHUNK_SIZE = 5 * 1024 * 1024 // 5MB

/**
 * 创建文件分片（仅切片，不计算 Hash）
 */
const createFileChunks = (file: File, chunkSize = CHUNK_SIZE): Blob[] => {
  const chunks: Blob[] = []
  let cur = 0
  while (cur < file.size) {
    chunks.push(file.slice(cur, cur + chunkSize))
    cur += chunkSize
  }
  return chunks
}

interface WorkerMessage {
  type: 'progress' | 'result' | 'error'
  workerId: number
  progress?: number
  hash?: string
  error?: string
}

interface WorkerTask {
  id: number
  chunks: Blob[]
  start: number
  end: number
}

/**
 * 使用 Web Worker 并行计算文件 Hash
 */
const generateFileHashWithWorkers = async (
  chunks: Blob[],
  onProgress?: (percent: number) => void,
): Promise<string> => {
  const threadCount = Math.min(
    navigator.hardwareConcurrency || 4,
    chunks.length,
  )
  const chunksPerThread = Math.ceil(chunks.length / threadCount)

  // 按线程数拆分任务
  const tasks: WorkerTask[] = []
  for (let i = 0; i < threadCount; i++) {
    const start = i * chunksPerThread
    const end = Math.min(start + chunksPerThread, chunks.length)
    if (start >= end) break
    tasks.push({ id: i, chunks: chunks.slice(start, end), start, end })
  }

  // 每个 worker 的进度（用于汇总整体进度）
  const workerProgress = Array.from({ length: tasks.length }, () => 0)

  const workerPromises = tasks.map((task) => {
    return new Promise<{ workerId: number, hash: string }>(
      (resolve, reject) => {
        const worker = new Worker(
          new URL('./hashWorker.ts', import.meta.url),
          { type: 'module' },
        )

        worker.postMessage({
          id: task.id,
          chunks: task.chunks,
        })

        worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
          const msg = e.data

          switch (msg.type) {
            case 'progress': {
              if (msg.progress === undefined) return
              workerProgress[msg.workerId] = msg.progress
              // 汇总整体进度
              const total
                = workerProgress.reduce((a, b) => a + b, 0) / tasks.length
              onProgress?.(Math.round(total))
              break
            }

            case 'result': {
              if (!msg.hash) return
              worker.terminate()
              resolve({ workerId: msg.workerId, hash: msg.hash })
              break
            }

            case 'error':
              worker.terminate()
              reject(new Error(msg.error))
              break
          }
        }

        worker.onerror = (err) => {
          worker.terminate()
          reject(err)
        }
      },
    )
  })

  // 等待所有 worker 完成
  const results = await Promise.all(workerPromises)

  // 按 workerId 排序后合并各段的 Hash
  const spark = new SparkMD5.ArrayBuffer()
  results
    .sort((a, b) => a.workerId - b.workerId)
    .forEach(r => spark.append(new TextEncoder().encode(r.hash)))

  return spark.end()
}
```
:::

#### Worker 线程 (hashWorker.ts)

::: details code
```ts
import SparkMD5 from 'spark-md5'

interface WorkerTask {
  id: number
  chunks: Blob[]
}

self.onmessage = async (e: MessageEvent<WorkerTask>) => {
  const { id, chunks } = e.data

  try {
    const spark = new SparkMD5.ArrayBuffer()
    const total = chunks.length

    for (let i = 0; i < total; i++) {
      const buffer = await chunks[i].arrayBuffer()
      spark.append(buffer)

      // 向主线程报告进度
      const progress = Math.round(((i + 1) / total) * 100)
      self.postMessage({ type: 'progress', workerId: id, progress })
    }

    // 计算完成，返回结果
    self.postMessage({ type: 'result', workerId: id, hash: spark.end() })
  }
  catch (err) {
    self.postMessage({
      type: 'error',
      workerId: id,
      error: err instanceof Error ? err.message : String(err),
    })
  }
}
```
:::

#### 使用示例

```ts
const handleFileUpload = async (file: File) => {
  const chunks = createFileChunks(file)

  // 多线程并行计算 Hash，附带进度回调
  const fileHash = await generateFileHashWithWorkers(chunks, (percent) => {
    console.log(`Hash 计算进度: ${percent}%`)
  })

  console.log('文件 Hash:', fileHash)
  // 后续：上传分片 → 合并...
}
```

要点：

**1. 为什么用 Worker 计算 Hash 而不是上传？**

`Worker` 线程同样可以发起 `fetch` 请求，但将上传逻辑放入 `Worker` 的收益有限——上传本身的瓶颈在于网络 I/O，不在 CPU。真正阻塞主线程的是大文件的 **Hash 计算**（`spark-md5` 逐片读取 `ArrayBuffer` 并做增量摘要），这部分属于 CPU 密集型运算，放到 `Worker` 中收益最大。

**2. 优化变体：Worker 只读文件，主线程算 Hash**

如果分片数量远大于线程数、`postMessage` 传递 `ArrayBuffer` 的成本可接受，也可以让 `Worker` 仅负责 `chunk.arrayBuffer()` 读取，通过 `Transferable Objects` 将 `ArrayBuffer` 转回主线程统一计算 MD5——避免了「各 Worker 的 MD5 结果无法直接拼成完整文件 MD5」的问题：

```ts
// Worker 内部
const buffer = await chunk.arrayBuffer()
// 将 buffer 的所有权转移给主线程（零拷贝）
self.postMessage({ type: 'chunk', buffer }, [buffer])
```

**3. 线程数不宜超过 CPU 核心数**

`navigator.hardwareConcurrency` 返回的是逻辑核心数。创建超过该数量的 Worker 反而会增加线程切换开销。同时需要用 `Math.min` 确保在分片数量很少时不创建多余 Worker。

**4. 错误隔离**

每个 `Worker` 独立 `try-catch` 并通过 `worker.onerror` 兜底，单个 Worker 失败不影响其他 Worker，主线程通过 `Promise.all` 统一感知失败。
