module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    globals: {
        wx: true,
        weex: true,
        uni: true,
        plus: true,
        getApp: true,
        getCurrentPages: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    rules: {
        //
    },
}
