module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:package-json/recommended",
    "prettier",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    babelOptions: {
      configFile: "./.babelrc",
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "sort-exports/sort-exports": ["error", { sortDir: "asc" }],
    "sort-imports": ["error", { ignoreCase: true }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
  },
  plugins: ["react", "sort-exports", "package-json", "prettier"],
  settings: {
    react: {
      version: "16.3",
    },
  },
};
