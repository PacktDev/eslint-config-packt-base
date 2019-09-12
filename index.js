module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['block', 'block-like', 'cjs-export', 'class', 'export', 'import'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['export', 'import'],
        next: ['export', 'import']
      }
    ],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: true
      }
    }],
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }]
  },
};
