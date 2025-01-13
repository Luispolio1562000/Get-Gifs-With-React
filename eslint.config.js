import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'


const pluginJest = require('eslint-plugin-jest');

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}', '**/*.spec.js', '**/*.test.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      globals: pluginJest.environments.globals.globals,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' },
      "jest": {
        "version": 29
      }
    },
    plugins: {
      react,
      jest: pluginJest,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,

    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
]
