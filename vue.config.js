const path = require('path');

const qnConfig = {
  domain: 'https://img.haoshiqi.net',
};

module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? `${qnConfig.domain}/` : '/',
  configureWebpack: config => {
    // console.log(config);
    config.resolve.extensions.push('.css', '.less', '.md');
    config.resolve.alias['assets'] = path.resolve('./src/assets');
    config.resolve.alias['@'] = path.resolve('./src');
  },
  css: {

  }
};
