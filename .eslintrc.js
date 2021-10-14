module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2020,
  },
};
