module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "linebreak-style": 0,
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "consistent-return": 0,
    "no-underscore-dangle": 0,
    "no-tabs": 0,
    "dot-notation": 0,
    "default-case": 0,
    "class-methods-use-this": 0,
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "import/no-unresolved": "off",
    "no-trailing-spaces": [
      "error",
      {
        "ignoreComments": true
      }
    ],
    "max-len": [
      "error",
      150,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ]
  },
};
