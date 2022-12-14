const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  printWidth: 120,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
};
