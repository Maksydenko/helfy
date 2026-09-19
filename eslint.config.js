import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tsdoc from 'eslint-plugin-tsdoc'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['node_modules', 'dist', 'eslint.config.js'] },
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      perfectionist.configs['recommended-natural']
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      tsdoc
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports'
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'warn',
        { ignoreParameters: false, ignoreProperties: false }
      ],
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'arrow-body-style': ['warn', 'as-needed'],
      curly: ['warn', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'func-style': ['warn', 'expression'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-lonely-if': 'warn',
      'no-restricted-syntax': [
        'warn',
        {
          message: 'Avoid `export default` on declarations.',
          selector: 'ExportDefaultDeclaration > FunctionDeclaration'
        }
      ],
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unused-vars': 'off',
      'no-useless-rename': 'warn',
      'object-shorthand': ['warn', 'always'],
      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          next: ['class', 'const', 'export', 'function', 'let', 'var'],
          prev: 'import'
        },
        { blankLine: 'always', next: '*', prev: 'directive' },
        { blankLine: 'any', next: 'directive', prev: 'directive' },
        { blankLine: 'always', next: 'return', prev: '*' },
        {
          blankLine: 'always',
          next: ['do', 'for', 'if', 'switch', 'try', 'while', 'with'],
          prev: '*'
        },
        {
          blankLine: 'always',
          next: '*',
          prev: ['do', 'for', 'if', 'switch', 'try', 'while', 'with']
        }
      ],
      'perfectionist/sort-imports': 'off',
      'prefer-template': 'warn',
      quotes: ['warn', 'single', { avoidEscape: true }],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^node:'],
            ['^[a-z]'],
            ['^@/app/'],
            ['^@/pages/'],
            ['^@/views/'],
            ['^@/widgets/'],
            ['^@/features/'],
            ['^@/entities/'],
            ['^@/shared/'],
            ['^@/'],
            ['^@'],
            ['\\/enums$', '\\.enum$'],
            ['\\/types$', '\\.type$'],
            ['\\/constants$', '\\.const$'],
            ['\\/configs$', '\\.config$'],
            ['\\/schemas$', '\\.schema$'],
            ['\\/mocks$', '\\.mock$'],
            ['\\/data$', '\\.data$'],
            ['\\/utils$', '\\.util$'],
            ['\\/services$', '\\.service$'],
            ['\\/stores$', '\\.store$'],
            ['\\/atoms$', '\\.atom$'],
            ['\\/contexts$', '\\.context$'],
            ['\\/providers$', '\\.provider$'],
            ['\\/hooks$', '^\\.\\.*/use[A-Z].*$', '^\\.*/use[A-Z].*$'],
            ['^\\.\\.(?!/?$)', '^\\.(?!/?$)'],
            ['^'],
            ['^.+\\.module\\.s?css$'],
            ['^\\u0000']
          ]
        }
      ],
      'tsdoc/syntax': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_'
        }
      ]
    }
  }
)
