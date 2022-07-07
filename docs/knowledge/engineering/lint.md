---
title: 代码规范
---

:::tip Lint
掘金：[前端工程化之规范化 🔗](https://juejin.cn/post/7111759355766603784/) —— 2022-06-22
:::

## 最终方案

## 🏴‍☠️ Eslint

使用 `eslint` 进行格式化，且禁用 `prettier` 的格式化，否则两者会存在冲突

- Install

```bash
pnpm i eslint-config-suressk -D
```

- Config `.eslintrc`

```json
{
  "extends": "suressk"
}
```

- `vscode config`，创建 `.vscode/settings.json` 文件：

```json
{
  /* 禁用 prettier */
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Git Flow

代码编写需要规范，代码分支管理同样也需要拥有流程和规范

> [A successful Git branching model 🔗：](https://nvie.com/posts/a-successful-git-branching-model/)

<img src="https://nvie.com/img/git-model@2x.png" width="50%" />

<!-- ![gitFlow](https://images.xiaozhuanlan.com/photo/2019/5718781e0e21be857d884d33b421995e.) -->

据上图描述，我们一般分为 5 条常用分支方便统一管理：

- `Production` 分支

  > 也就是默认的 `master` 分支（或重命名的主分支名，如 `main`），这个分支用于发布到最新的生产环境的代码,<br/>
  > 包含 `release` 分支发布的版本<br/>
  > 这个分支的代码只能从其他分支 `合并` 过来，而不在此分支上直接修改

- `Release` 分支

  > 它是用于每次发布代码的分支，发版时就按规范标准创建一个 `release` 分支，并打上 `tag` 发布<br/>
  > 再将发布完成的代码合入 `主分支`，它一般是由 `Develop` 分支测试通过之后创建而来

- `Develop` 分支

  > 它是我们的主开发分支，包含所有要发布到下一个 `Release` 的代码，这个主要合并于其他分支，比如 `Feature` 分支

- `Feature` 分支

  > 它是用来开发一个新的功能，一旦开发完成，我们合并回 `Develop` 分支，并进入下一个 `Release`

- `Hotfix` 分支

  > 当生产环境的代码出现 `bug` 需要紧急修复时，我们会从 `主分支` 切一个 `hotfix` 分支出来进行修复<br/>
  > 测试完毕之后合入 `主分支` 和 `Develop` 分支，并进入下一个 `Release`（合并完毕后通常会删掉此分支）

综上，示例分支名大致如下：

```bash
# master branch
[main]

# release branch with version-number
[release/v1.0.5]

# new features of Iteration-version-number
[feat/v3.9]
# new feature of achieving reactivity
[feat/reactivity]

# hotfix branch of issues-number
[fix/issues-31]
# Often occurs when multiple people collaborate
# hotfix branch of someone to fix the issue-number
[fix/saul-issues-31]
# hotfix branch of bug-name and issue-number
[fix/saul-type-call-31]
```

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
        "commit-msg": "ts-node scripts/verify-commit.ts"
      }
    },
    "lint-staged": {
      "*": [
        "eslint . --fix"
      ]
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
