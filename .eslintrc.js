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
    "plugin:json/recommended",
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
    "sort-imports": ["error", { ignoreCase: true }],
    "sort-exports/sort-exports": ["error", { sortDir: "asc" }],
    "prettier/prettier": ["error", { parser: "javascript" }],
  },
  plugins: ["react", "sort-exports", "prettier", "package-json"],
  settings: {
    react: {
      version: "16.3",
    },
  },
};
