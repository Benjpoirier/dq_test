const reactVersion = require("./package.json").dependencies.react;

module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["flowtype", "react", "prettier", "react-hooks"],
  globals: {
    candidateDeclineMotive: false,
    reduxLogger: false,
    CONFIG: false
  },
  rules: {
    "react/no-unused-prop-types": [
      2,
      { customValidators: [], skipShapeProps: true }
    ],
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        printWidth: 100,
        singleQuote: true,
        tabWidth: 4,
        trailingComma: "all",
        jsxBracketSameLine: true,
        useTabs: false
      }
    ],
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-extraneous-dependencies": "off",
    "react/display-name": 0,
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off"
  },
  settings: {
    react: {
      version: reactVersion
    }
  }
};
