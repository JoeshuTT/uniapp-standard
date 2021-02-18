'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')

module.exports = {
  devServer: {
    port: 1005,
    disableHostCheck: true, // 跳过host检查
    proxy: {
      '/api': {
        target: 'https://api.baidu.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  chainWebpack: config => {
    // 发行时启用了压缩时会生效
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap(args => {
        const compress = args[0].terserOptions.compress
        // 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
        compress.drop_console = true
        compress.pure_funcs = [
          '__f__', // App 平台 vue 移除日志代码
          // 'console.debug' // 可移除指定的 console 方法
        ]
        return args
      })
    }

    // bundle 分析
    // config.plugin('webpack-bundle-analyzer').use(WebpackBundleAnalyzer.BundleAnalyzerPlugin)
  },
}
