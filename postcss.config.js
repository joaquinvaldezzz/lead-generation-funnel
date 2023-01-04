const postcssSorting = require('./utils/postcssSorting')

module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-sort-media-queries': {},
    'postcss-sorting': {
      order: [...postcssSorting.order],
      'properties-order': [...postcssSorting.propertiesOrder],
      'unspecified-properties-position': 'bottom',
    },
    tailwindcss: {},
  },
}
