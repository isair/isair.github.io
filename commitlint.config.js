module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'config',
        'github',
        'asset',
        'component',
        'hook',
        'layout',
        'middleware',
        'page',
        'plugin',
        'static',
        'store',
        'unit',
        'e2e',
        'int',
        'multi',
        'deps',
        'deps-dev',
      ],
    ],
  },
};
