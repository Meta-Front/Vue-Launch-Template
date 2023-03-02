module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
    // 解决eslint找不到module的报错
    // node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    jsxPragma: 'React'
  },
  // plugins: ['vue'],
  rules: {
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
