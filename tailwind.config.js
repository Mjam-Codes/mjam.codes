const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

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
      sans: [...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
}
