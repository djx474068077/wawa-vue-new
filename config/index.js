'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static', // 指 静态资源文件夹，默认‘static’
    assetsPublicPath: '/', // 指 发布路径
    // 配置代理API
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
        cookieDomainRewrite: {
          '*': ''
        }
      },
    },

    // Various Dev Server settings
    host: '127.0.0.1', // can be overwritten by process.env.HOST | 默认打开的网页地址
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true, // 是否自动打开浏览器
    errorOverlay: true, // 是否查询错误
    notifyOnErrors: true, // 是否通知错误
    // poll是跟devserver相关的一个配置，webpack为我们提供的devserver是可以监控文件改动的，但在有些情况下却不能工作，我们可以设置一个轮询（poll）来解决
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false, // 是否展示eslint的错误提示

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map', // webpack提供的用来方便调试的配置

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true, // 一个配合devtool的配置，当给文件名插入新的hash导致清楚缓存时是否生成souce maps，默认在开发环境下为true

    cssSourceMap: true // 是否开启cssSourceMap
  },

  build: {
    // Template for index.html
    // 编译后index.html的路径，path.resolve(__dirname, '../dist')中
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), // 打包后的文件根路径，至于assetsSubDirectory和assetsPublicPath跟dev中的一样，
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    /**
     * Source Maps
     */

    productionSourceMap: true, // 是否开启source-map
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, // 是否压缩
    productionGzipExtensions: ['js', 'css'], //gzip模式下需要压缩的文件的扩展名，设置后会对相应扩展名的文件进行压缩

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
