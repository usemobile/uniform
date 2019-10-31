# Use configs

A collection of configuration files containing prettier, eslint and stylelint.

## Usage

Install:
```
yarn add -D @usemobile_br/use
```

Import in eslint _(.eslintrc.js)_:
```js
const { eslint } = require('@usemobile_br/use');

module.exports = {
  ...eslint
};
```

Import in prettier _(.prettierrc.js)_:
```js
const { prettier } = require('@usemobile_br/use');

module.exports = {
  ...prettier,
};
```

Import in stylelint _(.stylelintrc.js)_:
```js
const { stylelint } = require('@usemobile_br/use');

module.exports = {
  ...stylelint,
};
```