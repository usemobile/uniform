const eslint = require('./lib/eslint');
const stylelint = require('./lib/stylelint');
const prettier = require('./lib/prettier');

module.exports = {
  stylelint,
  prettier,
  eslint,
  default: eslint,
};
