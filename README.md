# Uniform

A collection of configuration files containing prettier, eslint and stylelint.

## Usage

Install:
```
yarn add -D @usemobile_br/uniform
```

Import in eslint _(.eslintrc.js)_:
```js
const { eslint } = require('@usemobile_br/uniform');

module.exports = {
  ...eslint
};
```

Import in prettier _(.prettierrc.js)_:
```js
const { prettier } = require('@usemobile_br/uniform');

module.exports = {
  ...prettier,
};
```

Import in stylelint _(.stylelintrc.js)_:
```js
const { stylelint } = require('@usemobile_br/uniform');

module.exports = {
  ...stylelint,
};
```