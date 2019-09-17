module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
  ],
  plugins: [
    'import',
    'vue',
  ],
  globals: {
    window: false,
    document: false,
    expect: true,
    sinon: true,
    Blob: false,
    URL: false,
    isNaN: false,
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ],
  rules: {
    // https://yepbug.com/2018/08/28/what-is-the-benefit-of-prefer-default-export/
    'import/prefer-default-export': 'off', // 输出只有一个变量时使用 export default
    'vue/max-attributes-per-line': ['error', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      },
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    // 'vue/no-unused-components': '1',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    // 'max-len': [
    //   'error',
    //   {
    //     code: 120,
    //     ignoreUrls: true,
    //     ignorePattern: true,
    //   },
    // ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': 'off',
    'no-mixed-operators': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
      },
    ],
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
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
    'require-yield': [1],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'ignore',
        asyncArrow: 'ignore',
      },
    ],
    semi: ['error', 'never'],
    'func-names': 'off',
    'consistent-return': 'off',
  },

}
