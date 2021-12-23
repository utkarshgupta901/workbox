module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './packages/**/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  // Partially borrowed from https://github.com/google/gts/blob/8bd78c4c78526a72400f618a95a987d2a7c1a8db/.eslintrc.json
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'block-scoped-var': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'indent': 'off',
    'no-cond-assign': 'off',
    'no-dupe-class-members': 'off',
    'no-var': 'error',
    'no-warning-comments': 'off',
    'operator-linebreak': 'off',
    'prefer-const': 'error',
    'prefer-spread': 'off',
    'space-before-function-paren': 'off',
  },
  ignorePatterns: ['**/_version.ts', 'test/**'],
};
