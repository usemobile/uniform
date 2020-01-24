 <h1 align="center"> Uniform </h1>
<p align="center">
    <img src="https://img.shields.io/npm/v/@usemobile_br/uniform" />
    <img src="https://img.shields.io/npm/dt/@usemobile_br/uniform" />
    <img src="https://img.shields.io/github/workflow/status/usemobile/uniform/Node.js Package" />
    <img src="https://img.shields.io/npm/l/@usemobile_br/uniform" />
    <img src="https://img.shields.io/badge/node-%3E%3D12.13.0-green" />
	<br>
	<br>
	<br>
	<br>
    <img src="https://usemobile.com.br/wp-content/uploads/2019/10/Downloads-1.png" />
	<br>
	<br>
A collection of configuration files containing prettier, eslint and stylelint.
</p>

## 📋 Requirements
This project depends on **node:12.13.0** or above.

## 🚀 Usage

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

## 👨🏻‍💻 Author
- Created by [Highlander Paiva](https://github.com/hvpaiva)

## ❤️ Contributing
Bug reports and pull requests are welcome on GitHub

## 👮🏻‍♂️ License
The project is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
