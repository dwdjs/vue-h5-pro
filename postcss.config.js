module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      'viewportWidth': 375,
      'selectorBlackList': ['van-circle__layer'],
    },
  },
}
