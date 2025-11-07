// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
    },
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error',
        'single',
        { avoidEscape: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true,
      }],
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: {
          minProperties: 3,
          multiline: true,
          consistent: false,
        },
        ObjectPattern: {
          minProperties: 3,
          multiline: true,
          consistent: false,
        },
        ImportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: false,
        },
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: false,
        },
      }],
      '@stylistic/array-element-newline': ['error', { 'minItems': 3 }],

    },
  },
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  storybook.configs['flat/recommended'],
]);
