
// https://www.cnblogs.com/BlackStorm/p/add-stylelint-to-your-vue-project.html
// https://github.com/stylelint/stylelint-config-standard
// stylus 目前没有发现可用性高的相关插件，也导致 stylelint 不能解析 stylus 语法

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
    'property-no-vendor-prefix': [true, {
      ignoreProperties: ['appearance', 'text-size-adjust'],
    }],
    'value-no-vendor-prefix': true,
  },
}
