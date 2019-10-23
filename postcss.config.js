module.exports = {
  plugins: {
    autoprefixer: {},
    // 'postcss-px-to-viewport': {
    //   'viewportWidth': 375,
    //   'selectorBlackList': ['van-circle__layer'],
    // },
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*'],
      // 该项仅在使用 Circle 组件时需要
      // 原因参见 https://github.com/youzan/vant/issues/1948
      selectorBlackList: ['van-circle__layer'],
    },
  },
}
