const postcssSorting = require('./utils/postcssSorting')

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],
  customSyntax: 'postcss-scss',
  rules: {
    'max-nesting-depth': 3,
    'order/order': [...postcssSorting.order],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [...postcssSorting.propertiesOrder],
    'prettier/prettier': true,
  },
}
