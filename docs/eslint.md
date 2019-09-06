# 使用eslint和prettier来检查和格式化代码

## 关于代码格式规范

> 代码是给人看的，可维护性第一

## 为什么要用 eslint 和 prettier问题

- prettier 主要是为了格式化代码，而在没有 prettier 之前，是用 eslint —fix和 编辑器自带代码格式来进行代码格式化的
  - 每种编辑器会有不一样的代码格式，而且配置会比较麻烦
  - prettier 已经逐渐成为业界主流的代码风格格式化工具
  - 减轻 eslint 等工具的校验规则，因为将代码样式校验交给了 prettier，所以可以将代码校验的规则更准确地应用到代码真正的规范上面
- eslint 是主要还是负责代码规则校验，prettier 只调整代码风格，代码样式，eslint 才是真正检查代码是否符合规范的工具

## 解决办法：

- 使用 editorconfig 协助兼容开发工具的代码格式化。
- 使用 eslint 检查代码。
- 使用 prettier 格式化代码。（可以理解为prettier是 `eslint —fix` 的加强版，用 prettier 来代替 eslint -fix）
- 手动修改剩下的有问题的地方，或者有些地方很难用规则来判断的时候，就需要手动修改。

**请参考官方文档**：

- 配置指南 https://eslint.vuejs.org/user-guide/#editor-integrations
- 所有规则 https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/README.md

## 配置 .eslintrc.js

```js
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  extends: [
    'plugin:vue/recommended',
  ],
  plugins: [
    'import',
    'vue',
  ],
  rules: {
    // https://yepbug.com/2018/08/28/what-is-the-benefit-of-prefer-default-export/
    'import/prefer-default-export': 'off', // 输出只有一个变量时使用 export default
    'vue/max-attributes-per-line': ['error', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      }
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': [
      'off',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-restricted-syntax': 'off',
    'no-shadow': [
      'error',
      {
        allow: [
          'res',
          'data',
          'err',
          'cb',
          'state',
          'resolve',
          'reject',
          'done',
        ],
      },
    ],
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        // args: 'after-used',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': 'off',
    'no-useless-escape': 'off',
    'prefer-template': 'off',
    'prefer-arrow-callback': 'off',
    'require-yield': [1],
    semi: ['error', 'never'],
    'func-names': 'off',
    'consistent-return': 'off',
  },
}
```

其他说明

```bash
// 这里需要全局安装最主要的两个node 模块，主要是要让 ide 编辑器能够读取全局环境来调用这2个模块
npm install eslint prettier -g --save-dev

// 这个是为了 eslint 跟 prettier 可以联合使用
npm install --save-dev eslint-plugin-prettier
// 这个是为了让 eslint 跟 prettier 兼容，关闭 prettier 跟 eslint 冲突的rules
npm install --save-dev eslint-config-prettier

# vue template 中禁用规则
<!-- eslint-disable-next-line vue/max-attributes-per-line -->

```

- eslint prettier: 全局安装最主要的两个node 模块，主要是要让 ide 编辑器能够读取全局环境来调用这2个模块
- 为了 eslint 跟 prettier 可以联合使用
- eslint-config-prettier: 这个插件是如果eslint的规则和prettier的规则发生冲突的时候（主要是不必要的冲突），例如eslint 限制了必须单引号，prettier也限制了必须单引号，那么如果用 eslint 驱动 prettier 来做代码检查的话，就会提示2种报错，虽然他们都指向同一种代码错误，这个时候就会由这个插件来关闭掉额外的报错
- babel-eslint: 有些代码是没被 eslint 支持的，加上这个插件来保持兼容性
- eslint-plugin-html: 为了让eslint 可以检查`.vue`文件的代码

参考：

https://www.jianshu.com/p/d38e7e3b80cb
