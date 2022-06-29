---
title: tsconfig.json 配置一览
---

如果一个目录下存在一个 `tsconfig.json` 文件，那么它意味着这个目录是 `TypeScript` 项目的根目录。 `tsconfig.json` 文件中指定了用来编译这个项目的根文件和编译选项

> [官方链接 🔗 English](https://www.typescriptlang.org/tsconfig)<br/> [中文链接 🔗 (不全)](https://www.tslang.cn/docs/handbook/compiler-options.html)

## `tsconfig.json` 配置项

- **`extends`**: [`string`] 包含指向另一个要继承文件的路径
- **`compilerOptions`**: [`json`] 编译选项
- **`files`**: [ `string[]` ] 指定 **需要** 编译的文件，默认目录下的所有 `.ts`, `.d.ts`, `.tsx` 文件，指定的文件总会包含在内，**不会** 被 `exclude` 过滤
- **`include`**: [ `string[]` ] 同 `files`，但配置的文件 **可以** 使用 `exclude` 属性过滤
- **`exclude`**: [ `string[]` ] 指定 **不需要** 编译的文件

## `compilerOptions`

下面仅列出常用的配置项：

```json
// tsconfig.json
{
  "compilerOptions": {
    /*
      解析非相对模块名的基准目录
      默认相对路径相对于 `tsconfig.json` 文件路径查找
    */
    "baseUrl": ".",
    /* 编译输出路径 */
    "outDir": "lib",
    /* 生成相应的 `.map` 文件，默认 false */
    "sourceMap": false,
    /*
      指定类型文件查找的目录仅为 `./typings`，不包含
      ./node_modules/@types,
      ../node_modules/@types,
      ../../node_modules/@types,
      ...
      目录下的包
    */
    "typeRoots": ["./typings"],
    /*
      指定要包含的类型声明文件名列表，默认 ./node_modules/@types 目录
      若如下例所示，那么将不包含 ./node_modules/@types 目录下其他的包
      置为 `[]` 则表示禁用所有类型文件
    */
    "types": ["node", "express", "lodash"],
    /* 指定编译结果的 ECMAScript 目标版本，默认 "ES3" */
    "target": "esnext",
    /*
      指定生成哪个模块系统代码
      默认：target === ES6 ? "es6" : "commonjs"
    */
    "module": "esnext",
    /*
      决定如何处理模块
      默认：module === "AMD" or "System" or "ES6" ? "Classic" : "Node"
    */
    "moduleResolution": "node",
    /* 允许编译javascript文件，默认 false */
    "allowJs": false,
    /*
      启用所有严格类型检查选项，默认 false
      置为 true，相当于：
      noImplicitAny: true 
      noImplicitThis: true
      alwaysStrict: true
      strictNullChecks: true
      strictFunctionTypes: true
      strictPropertyInitialization: true
    */
    "strict": true,
    /* 若有未使用的 局部变量 则抛错，默认 false */
    "noUnusedLocals": true,
    /* 若有未使用的 参数 则抛错，默认 false */
    "noUnusedParameters": true,
    /* 启用实验性的ES装饰器，默认 false */
    "experimentalDecorators": true,
    /* 允许解析 `.json` 的文件，默认 false */
    "resolveJsonModule": true,
    /*
      ES Module 语法能在 node 环境被识别
      import { readFileSync } from 'fs'
      表现上等同于
      const { readFileSync } = require('fs')
    */
    "esModuleInterop": true,
    /* 编译结果移除注释，默认 false */
    "removeComments": false,
    /*
      在 .tsx 文件里支持 JSX： "React" 或 "Preserve"
      默认 "Preserve"
    */
    "jsx": "preserve",
    /*
      指定生成目标为 react JSX 时，使用的 JSX 工厂函数
      默认 "React.createElement"
    */
    "jsxFactory": "React.createElement",
    /*
      编译过程中需要引入的库文件的列表
      ES5 ~ ESNext, DOM, DOM.Iterable ...
    */
    "lib": ["esnext", "dom"],
    /* 仅用来控制输出的目录结构: outDir */
    "rootDir": "."
  }
}
```

##
