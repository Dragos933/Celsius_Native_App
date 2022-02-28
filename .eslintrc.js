module.exports = {
  env: {
    'node': true,
    'browser': true,
    'es6': true,
    'jest/globals': true,
  },
  extends: 'eslint:recommended',
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parserOptions: {
    'ecmaFeatures': {'jsx': true,},
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  plugins: [
    'react',
    'react-native',
    'jest',
  ],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'quotes': [
      'error',
      'single',
      {'avoidEscape': true}
    ],
    'indent': ['error', 2],
    'no-multiple-empty-lines': [2, {
      'max': 1,
      'maxEOF': 0
    }],
    'no-trailing-spaces': [2, { 'skipBlankLines': true }],
    'eol-last': ['error', 'always'],
    'object-curly-newline': ['error', {'multiline': true }],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': false }],
  }
};
