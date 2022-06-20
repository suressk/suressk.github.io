---
title: 代码规范
---

`代码规范` 是 `前端工程化` 落地的基石，用于约束 `编码规范` 和 `编码风格`，它的好处是：

- 强制规范代码风格统一，保持一样的编码习惯
- 增加代码的可维护性和可接入性，即使有新成员的加入也能快速适应项目的架构与需求
- 保障项目的整体质量，可减少无用代码、重复代码、错误代码和 `BUG` 代码的产生几率

我们通过配置代码校验工具（简称 `Lint`）来检测代码中的错误和漏洞，再根据其提供的修复方案格式化出正确代码。实现保存代码时一键校验，统一项目的编码规范和编码风格

## Lint

`Lint` 其实就是编辑器中运行的一个 `脚本进程`，它会将代码解析为 `AST 抽象语法树` 🌲，再通过遍历语法树并通过预设规则去进行判断和改动，再将更新后的语法树转换为（尽量）规范化的代码

## Commit 规范

我们在使用 `Git` 托管代码时，规范化的 `Commit Message` 可以帮助大家直观清晰地理解每次修改的内容，不仅能帮助别人 `Review`，还可以有效地输出 `ChangeLog`。那么要想前端工程化项目更易于维护，最好有一套 `Git` 提交说明的 `规范化模板`

目前最受开发人员肯定的规范是前端框架 `Angular` 提出的 [Angular提交信息规范 🔗](https://zj-git-guide.readthedocs.io/zh_CN/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/)，包含 `Header`（必填）、`Body` 和 `Footer` 三个部分的内容，提交格式如下：

```shell
<type>(<scope>): <subject>
# 空行
<body>
# 空行
<footer>
```

1. `Header` 作一行书写，包含 `type`，`scope`，`subject` 三个字段的内容

    - `type`：用于说明 commit 提交类型（必填）

      - `feat`：新增功能
      - `fix`：Bug修复
      - `docs`：文档更新
      - `ci`：脚本更新，修改了 CI 配置文件或脚本
      - `pref`：性能优化，提高性能的代码更改
      - `build`：更新构建，构建系统或者外部依赖项进行了修改、更新
      - `test`：新增测试，增加确实的测试或者矫正已存在的测试
      - `refactor`：代码重构，非新增功能也非修复缺陷
      - `chore`：事务变动，改动其他不影响代码的事务
      - `revert`：代码回滚，撤销某次代码提交
      - `merge`：分支合并，合并分支代码到其他分支
      - `style`：格式变动，不影响代码逻辑
      - `release`：版本发布

    - `scope`：用于说明 commit 的影响范围（选填）（比如按下面这些划分方案填写）

      - 按功能划分（如：数据层 - `Data`、视图层 - `View`和控制层 - `Control`）
      - 按交互层划分（如：组件 - `Component`、布局 - `Layout`、流程 - `Flow`、视图 - `View`和页面 - `Page`）
      - 按改动文件划分（如：某个文件 - `Button.tsx`，全部改动 -`*`）

    - `subject`：用于说明 commit 的细节描述（选填）。以精炼简洁的文字（中文还是英文就看各自规定了，一般推荐使用英文）说明提交的改动，比如可以遵循这些规则：

      - 以动词开头（如：`update`，`更新`）
      - 使用第一人称现在时
      - 首字母无需大写，重点区分的（如某组件）首字母无需大写
      - 不以句号（`.` / `。`）结尾

    `commit` 信息示例：

    ```git
    feat(Component): add Layout component
    feat(View): change the color of the button
    feat(Button.tsx): add Button component and change the default size of it
    ```

2. `Body` 部分可书写多行，对 `subject` 做更详尽的描述，内容应包括 `改动动机` 与 `改动前后对比`

3. `Footer` 部分只适用两种情况，分别是 `不兼容变动` 与 `问题关闭`

    - **不兼容变动**：当前代码与上一版本不兼容，则以 `BREAKING CHANGE` 开头，关联变动描述、变动理由和迁移方法
    - **问题关闭**：当前代码已修复某些 `Issue`，则以 `Closes` 开头，关联目标 `Issue`

### 方案一：`husky`+`commitlint`

- 安装

  ```shell
  pnpm i husky @commitlint/cli @commitlint/config-conventional -D
  ```

- 初始化 `husky`，创建 `.husky` 文件夹

  ```shell
  npx husky install
  # 安装 git hooks，创建 .husky 目录
  # 结果：husky - Git hooks installed

  # 执行
  npx husky-init

  # 它会在 package.json 文件的 scripts 字段中
  # 创建 "prepare": "husky install" 命令
  # 同时在 .husky 目录下创建 pre-commit 文件
  # 结果：husky - created .husky/pre-commit
  ```

- 在 `.husky` 目录下添加 `commit-msg` hook

  ```shell
  npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
  ```

  ```shell
  # 结果：husky - created .husky/commit-msg
  # .husky/commit-msg 文件内容：

  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  npx --no -- commitlint --edit ""
  ```

- 在 `package.json` 配置 `hooks`

  ```json
  "husky": {
    "hooks": {
      /* commit 信息提交前会执行此 script，若未配置此命令，将会跳过 */
      "pre-commit": "npm run test",
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
    }
  }
  ```

- 创建 `commitlint.config.js` 文件夹

  ```js
  module.exports = {
    extends: ['@commitlint/config-conventional']
  }
  ```

至此，我们基本配好了 `git commit` 命令会执行默认的检测方案。当然，这里我并未深入测试更多：

```shell
git commit -m "t"

> xxx@0.0.0 test
> node index.js # 配置的 test 命令

test...... # index.js 就一句: console.log('test......')
⧗   input: t
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```

### 方案二：自定义 verifyCommits 方法

结合上面的代码规范 `Lint`，我们可以在 `pre-commit` hook 中进行代码格式化，`commit-msg` hook 我们可以执行我们自己定义的 js 文件去校验 `commit` 信息是否符合我们定义的 `commit 规范`

- 安装

  ```shell
  pnpm i husky lint-staged chalk eslint prettier @typescript-eslint/parser -D
  ```

  - `yorkie`：`EvanYou` fork `husky` 的一个 `npm` 包（可替换 `husky`）
  - `lint-staged`：它仅是一个文件过滤器，这里的 staged 是与 Git 中的概念一致的，过滤出 `Git` 代码暂存区的代码（`committed` 的代码）
  - `chalk`：一个多彩的 `log` 记录工具
  - `eslint`，`prettier`：上面的 `Lint` 工具
  - `@typescript-eslint/parser`：用于解析格式化 `typescript` 代码

- 配置 `hooks` （`package.json`）

  ```json
  "gitHooks": {
    /* 触发格式化 */
    "pre-commit": "lint-staged",
    /* 我们自定义的校验 commit 信息的 js 文件 */
    "commit-msg": "node scripts/verifyCommit.js"
  },
  "lint-staged": {
    "*.js": [
      "prettier --write" /* 结合 .prettierrc 文件声明格式 */
    ],
    "*.ts?(x)": [
      "eslint", /* 结合 .eslintrc.js 文件声明格式 */
      "prettier --parser=typescript --write"
    ]
  }
  ```

- **`verifyCommits.js`**

  ```js
  const { bgRed, red, green } = require('chalk')
  const msgPath = process.env.GIT_PARAMS
  const msg = require('fs')
    .readFileSync(msgPath, 'utf-8')
    .trim()

  /* commit 信息规则， */
  const commitRE =
    /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

  if (!commitRE.test(msg)) {
    console.log()
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        `invalid commit message format.`
      )}\n\n` +
        chalk.red(
          `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
        ) +
        `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
        `    ${chalk.green(
          `fix(v-model): handle events on blur (close #28)`
        )}\n\n` +
        chalk.red(`  See .github/commit-convention.md for more details.\n`)
    )
    process.exit(1)
  }
  ```