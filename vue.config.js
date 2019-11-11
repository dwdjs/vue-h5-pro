const path = require('path')

// const qnConfig = {
//   domain: 'https://img.haoshiqi.net',
// }

const __DEV__ = process.env.NODE_ENV === 'development'
const __PROD__ = process.env.NODE_ENV === 'production'

// path.join(__dirname, 'src') 等效 path.resolve('./src')
function resolve(dir) {
  return path.join(__dirname, dir)
  // return path.resolve(dir)
}

module.exports = {
  // outputDir: 'dist',
  publicPath: __DEV__ ? `./` : './',
  assetsDir: __DEV__ ? './' : './static',
  // 直接修改 webpack 配置
  configureWebpack: config => {
    // console.log(config);
    config.resolve.extensions.push('.css', '.styl', '.less', '.md')
  },
  // 将修改 merge 到 webpack 配置中
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
    // if (!__DEV__) {}
    /**
      第三方库提取（分四层）
      - config.optimization.delete('splitChunks') // 删除默认的
      - 将 vue 项目通用模块打包为 vue-lib，跨项目共享 cdn
        - 包含 vue, vue-router, vuex, axios, register-service-worker
      - 其他第三方库打包为 chunk-vendors
      - 项目公共代码打包为 chunk-common
      - 其他代码
      */

    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 60000, // byte, 30kb
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        // 抽取第三方模块
        libs: {
          name: `chunk-lib`,
          test: /[\\/]node_modules[\\/](vue|vuex|vue-router|axios)[\\/]/,
          priority: 0,
          chunks: 'initial',
        },
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    })
  },
  css: {
    sourceMap: !__PROD__,
  },
  productionSourceMap: !__PROD__,
  lintOnSave: !__PROD__,
  runtimeCompiler: false,
  crossorigin: 'anonymous',
  // 代理设置
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 8086,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8086/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
