import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
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
          minProperties: 3, multiline: true, consistent: true,
        },
        ObjectPattern: {
          minProperties: 3, multiline: true, consistent: true,
        },
        ImportDeclaration: {
          minProperties: 3, multiline: true, consistent: true,
        },
        ExportDeclaration: {
          minProperties: 3, multiline: true, consistent: true,
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
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
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
]);
