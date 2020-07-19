module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'scope-empty': [1, 'never'],
    'scope-enum': [2, 'always', ['core', 'styles', 'front-end', 'back-end', 'login']],
  },
};
