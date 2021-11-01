module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021
  },
  rules: {
    'import/no-cycle': 'off',
    'prettier/prettier': ['error'],
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    camelcase: 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/no-named-as-default': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-named-as-default-member': 'off',
    'no-console': ['error', { allow: ['log', 'error'] }]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './src'],
          ['@agenda', './src/modulos/agenda']
        ]
      }
    }
  }
};
