// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2015
  },
  extends: ['eslint:recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-undef': 2,
    'no-unused-vars': 'off'
  }
};
