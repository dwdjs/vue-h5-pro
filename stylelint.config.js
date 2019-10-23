
// https://blog.csdn.net/qq_42606051/article/details/85987840
// https://github.com/stylelint/stylelint-config-standard
// stylelint.config.js
module.exports = {
  'defaultSeverity': 'error',
  'extends': ['stylelint-config-standard'],
  'plugins': ['stylelint-scss'],
  'rules': {
    // 不要使用已被 autoprefixer 支持的浏览器前缀
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  },
}
