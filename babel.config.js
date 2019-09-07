module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      { libraryName: '@dwdjs/vant', libraryDirectory: 'es', style: true },
      'vant',
    ],
    [
      'transform-remove-console',
      { 'exclude': [ 'error', 'warn'] },
    ],
  ],
}
