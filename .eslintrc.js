module.exports = {
    root: true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    parser: "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": 12,
        babelOptions: {
            configFile: "./.babelrc",
        },
    },
    rules: {
        'semi': ['error', 'never'],
    },
};