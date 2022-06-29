---
title: 代码规范
---

:::tip Lint
掘金：[前端工程化之规范化 🔗](https://juejin.cn/post/7111759355766603784/) —— 2022-06-22
:::

## 最终方案

## Eslint

`eslint` 与 `prettier` 有些是存在冲突的，到时候使用一个 `eslint` 就可以了，但目前没有细致去了解，后面再去看吧 [🏴‍☠️]

暂时使用的是上面链接的方案

<!-- ## Prettier -->

## Husky 添加 git-hooks

- 安装相关的 `package`

  ```bash
  # husky 添加 git-hooks
  # lint-staged： 检测 committed 文件进行格式化处理（应与上面 eslint 结合的）
  # conventional-changelog-cli： 用于生成 changelog.md 文档
  pnpm i husky lint-staged conventional-changelog-cli -D
  ```

- 添加 `.husky` 文件，添加 `git-hooks`

  ```bash
  # 创建 .husky 目录，初始化 git-hooks
  npx husky install
  # 添加 pre-commit hook
  npx husky-init
  ```

- 修改 `.husky/pre-commit` 文件

  ```bash
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  # npm test  # 这句删掉，改为下面这行，进行代码格式化检测
  # 这句需要结合 eslint 或 prettier 来进行代码格式化
  npx lint-staged
  ```

- 添加 `commit-msg` hook，并修改 `.husky/commit-msg` 文件

  ```bash
  # 添加 commit-msg hook，"$1" 参数不会被此命令写进 .husky/commit-msg 文件
  # 下面需要手动添加，否则将拿不到 commit message 信息
  npx husky add .husky/commit-msg 'npx ts-node scripts/verify-commit.ts "$1"'
  ```

  ```bash
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  npx ts-node scripts/verify-commit.ts "$1" # 添加 "$1" 参数
  ```

- `package.json` 配置 `git-hooks`（好像不配置也没什么影响），`lint-staged` 需要配置

  ```json
  // package.json
  {
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged",
        "commit-msg": "ts-node scripts/verifyCommits.ts $1"
      }
    },
    "lint-staged": {
      "*.(js|ts)?(x)": ["eslint"]
    }
  }
  ```

## 实现 Push & Release 脚本

- 创建 `scripts` 目录，用于实现执行 `shell` 命令的脚本文件，通过 `terminal 交互` 完成 `commit` 信息格式验证，`release` 版本确认等功能

- 安装相关的 `package`

  ```bash
  # ts-node: node 环境直接执行 ts 文件
  # execa: 用于执行 脚本 的包
  # prompts: 以交互式的方式，获取命令行交互的内容
  # picocolors: 美化命令行 log 内容
  pnpm i ts-node execa prompts picocolors -D

  # semver: 用于专门分析 Semantic Version（语义化版本）的工具（release）
  # minimist: 用于解析获得 process 命令行参数
  # fs-extra: 用于读取文件，可直接读取为 json 格式，省去 fs 读取之后还要转化为 json
  pnpm i semver minimist fs-extra @types/minimist @types/fs-extra -D
  ```

- 创建 `scripts/tsconfig.json` 文件，用于在 `node` 环境实现 `ts-node` 可以编译执行 `ESM` 格式的 `ts` 脚本 [tsconfig 配置说明 🔗](/knowledge/engineering/tsconfig)

  ```json
  {
    "include": ["."],
    "compilerOptions": {
      "module": "CommonJS",
      "target": "ES2020",
      "moduleResolution": "Node",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "noUnusedLocals": true /* 未用到的引用 */,
      "forceConsistentCasingInFileNames": true
    }
  }
  ```

- 在 `package.json` 中创建要执行的脚本命令，例如：

  ```json
  // package.json
  {
    "scripts": {
      "push": "ts-node scripts/push.ts",
      "release": "ts-node scripts/release.ts"
      /* ... other command */
    }
  }
  ```

- 在 `scripts` 目录下创建我们 上面配置命令 要执行的 `ts` 文件

  **⛩ 详细示例可见 [Github： \*/scripts/\* 🔗](https://github.com/suressk/sure-utils/tree/main/scripts)**

  这里写几个示例的 `utils` 方法：

  ```ts
  import minimist from 'minimist'
  import execa from 'execa'
  import fsExtra from 'fs-extra'
  import type { Options as ExecaOptions } from 'execa'

  // get shell command arguments
  export const args = minimist(process.argv.slice(2))

  // run shell command
  export async function run(
    bin: string,
    args: string[],
    opts: ExecaOptions<string> = {}
  ) {
    // such as: run('git', ['commit', '-m', commitMsg])
    return execa(bin, args, { stdio: 'inherit', ...opts })
  }

  // update 'package.json' version
  export function updateVersion(pkgPath: string, version: string): void {
    const pkg = fsExtra.readJSONSync(pkgPath)
    pkg.version = version
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
  }
  ```

- 后续我们就只需要通过 `yarn push` 命令，就可以替换如下的 `git` 命令操作：

  ```bash
  git add . # git add -A
  git commit -m "feat(scripts/*): add shell commands"
  git push
  ```
