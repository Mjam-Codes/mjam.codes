const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      coffee: '#e3bb341A',
      'custom-primary': '#BF5AD9',
      'custom-secondary': {
        500: '#ae8883',
        700: '#5c1006B3',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      mono: ['ui-monospace', 'system-ui'],
    },
  },
}
