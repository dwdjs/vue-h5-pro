module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      { libraryName: '@dwdjs/vant', libraryDirectory: 'es', style: true },
      'vant',
    ],
  ],
}
