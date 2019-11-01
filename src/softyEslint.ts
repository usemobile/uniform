"use strict";

import * as path from "path";

const eslintFolder = path.join(path.dirname(require.resolve("eslint")), "..");

const moduleResolverPath = path.join(
  eslintFolder,
  "lib/shared/relative-module-resolver"
);
const ModuleResolver = require(moduleResolverPath);

ModuleResolver.resolve = function(moduleName: string) {
  return require.resolve(moduleName);
};

module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"].map(key =>
    require.resolve(`eslint-config-${key}`)
  ),
  plugins: ["eslint-comments", "jest", "unicorn", "react-hooks"],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
  rules: {
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "generator-star-spacing": 0,
    "function-paren-newline": 0,
    "import/no-unresolved": [1, { ignore: ["^@/", "^umi/"] }],
    "import/no-extraneous-dependencies": [
      1,
      {
        optionalDependencies: true,
        devDependencies: [
          "**/tests/**..{ts,js,jsx,tsx}",
          "**/_test_/**.{ts,js,jsx,tsx}",
          "/mock/**/**.{ts,js,jsx,tsx}",
          "**/**.test.{ts,js,jsx,tsx}",
          "**/_mock.{ts,js,jsx,tsx}"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "linebreak-style": 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": [0, "camel-case"],
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "max-len": "warn",
    "sort-imports": 0,
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "warn",
      { functions: false, classes: true, variables: true }
    ],
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    "import/no-cycle": 0,
    "react-hooks/rules-of-hooks": "warn", // Checks rules of Hooks
    "react/no-array-index-key": "warn",
    // issue https://github.com/facebook/react/issues/15204
    "react-hooks/exhaustive-deps": "off", // Checks effect dependencies

    // Conflict with prettier
    "arrow-body-style": ["warn", "as-needed"],
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": 0,
    "no-mixed-operators": "warn",
    "comma-dangle": 0,

    // Project preferences
    "class-methods-use-this": 0,
    "import/imports-first": 0,
    "import/no-dynamic-require": 0,
    "import/no-named-as-default": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/no-named-as-default-member": 0,
    "import/named": 0,
    indent: [2, 2, { SwitchCase: 1 }],
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ["Input"]
      }
    ],
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "no-console": 1,
    "no-unused-vars": 2,
    "prefer-template": 2,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-closing-tag-location": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-no-target-blank": 0,
    "react/jsx-uses-vars": 2,
    "react/require-default-props": 0,
    "react/require-extension": 0,
    "react/sort-comp": 0,
    "react/static-property-placement": 0,
    "require-yield": 0
  },
  settings: {
    "import/resolver": { node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } }
  }
};
