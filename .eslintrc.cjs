module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '.eslintrc.js', 'src/migrations/*.ts', 'node_modules/*', '*.d.ts', '*.json'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-import-helpers',
    "sort-keys-fix",
    'typescript-sort-keys',
    'unused-imports'
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ["error", { allow: ["error"] }],
    "typescript-sort-keys/interface": "warn",
    "semi": ["warn", "always"],
    'quotes': ['error', 'single'],
    'prefer-const': 'error',
    'no-var': 'error',
    'eqeqeq': ['error', 'always'],
    'prettier/prettier': ['error', {
      'useTabs': true,
      'tabWidth': 2,
      'singleQuote': true,
      "printWidth": 120,
      "bracketSpacing": true,
      "jsxSingleQuote": true,
      "proseWrap": "preserve",
    }],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "module",
          "/^~/",
          [
            "/^@mui/material/",
          ],
          [
            "/^@mui/icons-material/",
          ],
          [
            "/^@emotion/",
          ],
          [
            "/^@atoms/",
            "/^@molecules/",
            "/^@organisms/",
            "/^@pages/",
            "/^@templates/",
          ],
          [
            "/^@slices/",
            "/^@services/",
            "/^@hooks/",
          ],
          [
            "/^@helpers/",
            "/^@utils/",
          ],
        ]
      }
    ],
  },
}
