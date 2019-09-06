const path = require('path')

// const qnConfig = {
//   domain: 'https://img.haoshiqi.net',
// }

const __DEV__ = process.env.NODE_ENV === 'development'
const __PROD__ = process.env.NODE_ENV === 'production'

module.exports = {
  // outputDir: 'dist',
  publicPath: __DEV__ ? `/` : '/',
  assetsDir: __DEV__ ? './' : './static',
  configureWebpack: config => {
    // console.log(config);
    config.resolve.extensions.push('.css', '.less', '.md')
    config.resolve.alias['assets'] = path.resolve('./src/assets')
    config.resolve.alias['@'] = path.resolve('./src')
  },
  css: {
    sourceMap: !__PROD__,
    extract: true,
  },
  productionSourceMap: !__PROD__,
  lintOnSave: !__PROD__,
  runtimeCompiler: false,
  // crossorigin: 'anonymous',
}
