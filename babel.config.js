
const plugins = [
  [
    'import',
    { libraryName: '@dwdjs/vant', libraryDirectory: 'es', style: true },
    'vant',
  ],
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
