
const plugins = [
  // vant ui
  [
    'import',
    { libraryName: '@dwdjs/vant', libraryDirectory: 'es', style: true },
    'vant',
  ],

  // element ui
  // [
  //   'component',
  //   {
  //     libraryName: 'element-ui',
  //     styleLibraryName: 'theme-chalk',
  //   },
  //   'syntax-dynamic-import',
  // ],
]

if (process.env.NODE_ENV !== 'development') {
  plugins.push([
    'transform-remove-console',
    { 'exclude': [ 'error', 'warn'] },
  ])
}

module.exports = {
  presets: ['@vue/app'],
  plugins,
}
