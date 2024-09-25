import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist'], // Ignore the 'dist' directory
  },
  {
    files: ['**/*.{ts,tsx}'], // Specify the files to lint
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: parser, // Use the TypeScript parser
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Apply recommended rules for react-hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
