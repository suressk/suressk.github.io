import lintPreset from '@suressk/eslint-config'

export default lintPreset({
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  typescript: true,
  jsonc: true,
  yaml: true,
  toml: true,
  markdown: true,
  test: false,
  formatters: false,
  ignores: ['README.md', '.vscode/**'],
})
