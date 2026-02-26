import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettierConfig, // Отключает конфликтующие правила

  // Конфиг для JavaScript/TypeScript файлов
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser, // Добавляем парсер TypeScript
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tsPlugin, // Добавляем TypeScript плагин
      prettier: prettierPlugin, // Добавляем Prettier плагин
    },
    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // Общие правила
      'no-unused-vars': 'off', // Отключаем в пользу TS правила
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // Отключаем, используем TypeScript
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Специальные правила для TypeScript файлов
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Дополнительные TypeScript правила
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn', // Предупреждать при использовании any
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
