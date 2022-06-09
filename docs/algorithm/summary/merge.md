---
title: 归并排序
---

## 归并排序

流程：

> 取数组中点，分别将左右部分排好序，再将两侧整合到一起<br/>
> 使用两个下标（左右指针），分别从左右两边开始扫，比较两个指针所指的数<br/>
> 用一个新数组存储合并排序好的数，再更新原数组

```ts
function mergeSort(arr: number[]) {
    if (!arr || !Array.isArray(arr) || arr?.length < 2) {
        return
    }
    sort(arr, 0, arr.length - 1)
}

function sort(
    arr: number[],
    l: number,
    r: number
) {
    if (l === r) {
        return
    }
    const midIdx = l + ((r - l) >> 1)
    sort(arr, l, midIdx)
    sort(arr, midIdx + 1, r)
    merge(arr, l, midIdx, r)
}

function merge(
    arr: number[],
    l: number,
    mid: number,
    r: number
) {
    const resArr = new Array(r - l + 1)
    let i = 0,
        p1 = l,
        p2 = mid + 1

    while (p1 <= mid && p2 <= r) {
        resArr[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
        // 看下面这块儿注释部分，方便理解上面这句的逻辑
        // 左侧当前值小于等于右侧值，取左侧值；否则取右侧值
        // if (arr[p1] <= arr[p2]) {
        //     resArr[i] = arr[p1]
        //     p1++
        // } else {
        //     resArr[i] = arr[p2]
        //     p2++
        // }
        // i++
    }
    // 右侧下标越界，左侧剩余数扔进 resArr
    while (p1 <= mid) {
        resArr[i++] = arr[p1++]
    }
    // 左侧下标越界，右侧剩余数扔进 resArr
    while (p2 <= r) {
        resArr[i++] = arr[p2++]
    }
    const len = resArr.length
    // 更新 arr
    for (i = 0; i < len; i++) {
        arr[l + i] = resArr[i]
    }
}
```

依据 `master 公式`：`T(N) = 2 * T(N/2) + O(N)`，有 `a = 2, b = 2, d = 1`，以 b 为底 a 的对数（Logba = d），则时间复杂度为：`O(N·logN)`；空间复杂度是 `O(N)`

## 面试题

### 题目1：小和问题

> 在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和<br/>
> 示例：数组为 `[1, 3, 4, 2, 5]`，其小和为：`0 + 1 + (1+3) + 1 + (1+3+4+2) = 16`<br/>
> 要求时间复杂度为 `O(N·logN)`

我们很容易想出一个方案：两层 for 循环，循环当前位置之前的数，比当前数小的数进行求和即可解，但时间复杂度为 `O(N^2)`，不满足要求

我们需要转换一下思路：借助归并排序的思想，将数组进行排序操作，左右两组比较时，我们可以知道左侧数（记为 `num1`）小的情况下，右侧有几个数比 `num1` 大（直接通过下标计算的方式，无需遍历），就得产生几个 `num1` 的和。另外在左右数值比较相等时，需要先将右侧的指针后移（便于知道后面几个数大于 `num1`）

```ts
// 实现
function smallSum(arr: number[]) {
    if (!arr || !Array.isArray(arr) || arr?.length < 2) {
        return 0
    }
    return sort(arr, 0, arr.length - 1)
}

// 既要排序，也要求小和
function sort(
    arr: number[],
    l: number,
    r: number
) {
    if (l === r) {
        return 0
    }
    const mid = l + ((r - l) >> 1)
    return sort(arr, l, mid)
        + sort(arr, mid + 1, r)
        + merge(arr, l, mid, r)
}

function merge(
    arr: number[],
    l: number,
    mid: number,
    r: number
) {
    const resArr = new Array(r - l + 1)
    let i = 0,
        p1 = l,
        p2 = mid + 1,
        res = 0
    while (p1 <= mid && p2 <= r) {
        // (r - p2 + 1) * arr[p1] 右组有几个数大于左组当前值
        res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0
        // 仅当左侧数小于右侧数时，先扔左侧数
        resArr[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
    }
    while (p1 <= mid) {
        resArr[i++] = arr[p1++]
    }
    while (p2 <= r) {
        resArr[i++] = arr[p2++]
    }
    const len = resArr.length
    for (i = 0; i < len; i++) {
        arr[l + i] = resArr[i]
    }
    return res
}
```

### 题目2：逆序对问题

> 在一个数组中，左边的数如果比右边的数大，则这两个数构成一个逆序对，打印所有逆序对<br/>
> 示例：数组为 `[1, 3, 4, 2, 5, 0]`，打印：`[4, 2]`、`[5, 0]`<br/>
<!-- > 要求时间复杂度为 `O(N·logN)` -->

```ts
function getInverseArr(arr: number[]) {
    const len = arr?.length
    if (!arr || !Array.isArray(arr) || len < 2) {
        return []
    }
    const res = []
    for (let i = 1; i < len; i++) {
        const cur = arr[i]
        const pre = arr[i - 1]
        if (pre > cur) {
            res.push([pre, cur])
        }
    }
    return res
}
```

### 题目3：荷兰国旗问题（荷兰国旗三种颜色）

问题1：

> 给定一个数组和一个数 `num`，请把 `小于等于 num` 的数放在数组的左边，`大于 num` 的数放在数组的右边<br/>
> 要求：额外空间复杂度为 `O(1)`，时间复杂度为 `O(N)`

```ts
// 先用索引（idx）记录 <=num 区域（从 0 开始）
// 遍历数组，遇到满足条件的数，将 arr[i] 与 arr[idx] 交换，idx++
function getResult(arr: number[], num: number) {
    const len = arr?.length
    if (!arr || !Array.isArray(arr) || len < 2) {
        return
    }
    let idx = 0
    for (let i = 0; i < len; i++) {
        if (arr[i] <= num) {
            [arr[i], arr[idx]] = [arr[idx], arr[i]]
            idx++
        }
    }
}
```


问题2：

> 给定一个数组和一个数 `num`，请把 `小于 num` 的数放在数组的左边，`等于 num` 的数放在数组的中间，`大于 num` 的数放在数组的右边<br/>
> 要求：额外空间复杂度为 `O(1)`，时间复杂度为 `O(N)`

```ts
// 在上面问题的基础上，
// 我们创建两个索引指针
// lIdx（<num 区域，从 0 开始）
// rIdx（>num 区域，从 arr.length - 1 开始）
// 右区边界与第 i 位交换后，当前第 i 位还需判断
function getResult(arr: number[], num: number) {
    const len = arr?.length
    if (!arr || !Array.isArray(arr) || len < 2) {
        return
    }
    let lIdx = 0, rIdx = len - 1
    for (let i = 0; i <= rIdx;) {
        if (arr[i] > num) {
            [arr[i], arr[rIdx]] = [arr[rIdx], arr[i]]
            rIdx--
            // arr[i] 还需要判断，保持 i 不变
            continue
        }
        if (arr[i] < num) {
            [arr[i], arr[lIdx]] = [arr[lIdx], arr[i]]
            lIdx++
        }
        i++
    }
}
```

## 快速排序

### 1.0 版

> 我们取区间数组中的最后一个数作为 `num`，可以划分为 `<num` 区，当前 `num`，和 `>num` 区（每一步就可将 **一个** `num` 的位置固定），然后左右两侧区域按这个方式去递归

### 2.0 版

> 利用 `荷兰国旗问题` 的解决思想，依然取区间数组中的最后一个数作为 `num`，划分为 `<num 区`、 `=num 区` 和  `>num 区`，一次就将 **一批** `=num` 的数进行固定，左右两侧再按此方式去递归

上面两版时间复杂度都是 `O(N^2)`（极端情况，当区间数组最后一个每次都是偏左或偏右的情况）

### 3.0 版

> 在 `2.0 版本` 的基础上，不再固定以区间数组最后一个数作为 `num`，而是在区间数组范围内随机选一个数，将它与区间数组最后一项交换，用它作为 `num` 进行划分（从概率论的角度可以证明其时间复杂度为 `O(N·logN)`）

```ts
function quickSort(arr: number[]) {
    const len = arr?.length
    if (!arr || !Array.isArray(arr) || len < 2) {
        return
    }
    sort(arr, 0, len - 1)
}

function sort(
    arr: number[],
    l: number,
    r: number
) {
    if (l < r) {
        // 随机选择一个数
        swap(arr, ~~(Math.random() * (r - l + 1)), r)
        const par = partation(arr, l, r) // 返回 =区 的左右下标
        sort(arr, l, par[0] - 1) // <区 右边界：p[0] - 1
        sort(arr, par[1] + 1, r) // >区 左边界：p[1] + 1
    }
}

function partation(
    arr: number[],
    l: number,
    r: number
) {
    let less = l - 1 // <区 右边界
    let more = r // >区 左边界
    while (l < more) {
        // l 表示当前数的位置
        if (arr[l] < arr[r]) {
            // 当前值 < 划分值
            swap(arr, ++less,l++)
        } else if (arr[l] > arr[r]) {
            // 当前值 > 划分值
            swap(arr, --more, l)
        } else {
            l++
        }
    }
    swap(arr, more, r)
    // 返回 =区 的左右索引
    return [less + 1, more]
}

// 数组两数交换
function swap(
    arr: number[],
    l: number,
    r: number
) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
}
```
