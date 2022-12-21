---
title: 前端 Excel 文件解析
---

背景：

最近碰到一个需求是：前端上传 `.xlsx` / `.csv` 等 excel 表格文件，读取解析文件内容后再发给后端同学

还用的是 [amis](https://github.com/baidu/amis) 速搭平台，因为用的是老版本 amis（1.5.3），`Excel 上传组件` 无法解析上传的 excel 文件，它会提示你 `t.WorkBook is not a constructor` `惊不惊喜~`

::: danger 🦙
Emmmmm......
:::

> 那试试就 `shi shi～` 吧（这里以原生 `js` 为例）

1. 首先，我们需要一个 `<input>` 元素来上传我们的 `excel` 文件，拿到我们的文件内容，比如：

    ```html
    <input
      type="file"
      accept=".xlsx,.csv,.xls"
      autocomplete="off"
      onchange="onInpChange"
    >
    <!-- xlsx: 用于解析 excel buffer 内容为 json 数据 -->
    <script src="https://unpkg.com/xlsx/dist/xlsx.full.min.js" defer />
    ```

2. 拿到 file 文件内容并读取解析为 json：

    [xlsx](https://www.npmjs.com/package/xlsx)

    ```ts
    // input 选中文件 change 事件
    const onInpChange = (ev: Event) => {
      // 选中的文件
      const file = ev.target.files[0]
      
      readExcel(file)

      clearFile(ev.target)
    }

    // 读取 excel 文件内容
    const readExcel = (file: File) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        if (!file) {
          return
        }
        // 读为二进制流
        fileReader.readAsBinaryString(file);
        // 读取完毕会触发此方法 (any 大法)
        fileReader.onload = (ev: any) => {
          try {
            const workbook = XLSX.read(ev.target.result, { type: 'binary' })
            console.log('fileReader onload XLSX read workbook: ', workbook);
            workbook.SheetNames.forEach((sheetName) => {
              /**
               每行数据解析为，对象格式
              [
                { 奖品序列号: 1001, 快递公司: "天天快递", 快递单号: 1001001 },
                { 奖品序列号: 1002, 快递公司: "EMS", 快递单号: 1001002 },
                { 奖品序列号: 1003, 快递公司: "顺丰快递", 快递单号: 1001003 },
                ...
              ]
              */
              const rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
              if (rowObject.length > 0) {
                console.log('rowObject: ', rowObject)
                resolve(rowObject)
              }
            })
          } catch (error) {
            console.error(error);
            reject(error)
          }
        }
      })
    }

    // 清除选中文件 (Event.Target 类型不知道对不对哈～)
    const clearFile = (target: Event.Target) => {
      target?.files?.length = 0
    }
    ```

::: danger 🦠
此方案仅用作对小文件去解析处理，当直接上传一个 100M 乃至更大的文件的时候，内存就会被极速消耗，可能导致你的浏览器直接卡死（因而，此方案的使用范围很窄） **慎用！！！**
:::
