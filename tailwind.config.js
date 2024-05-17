const colors =  {
  red: '#f7768e',
  orange: '#ffbf7a',
  yellow: '#fffa9e',
  green: '#34febb',
  cyan: '#4ff2f8',
  blue: '#82aaff',
  purple: '#c792ea',
  black: '#141820', // dark background
  lightBlack: '#212836', // background
  darkGray: '#506686', // comments
  gray: '#7c8eac', // text
  lightGray: '#a8b5d1', // text
  white: '#c5cee0', // ui elements, rarely used
  selectionBg: '#283457', // selection background
}

module.exports = {
  content: ["./**/*.html", "./src/**/*.yaml", "./src/**/*.yml", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        'eh-black': colors.black,
        'eh-light-black': colors.lightBlack,
        'eh-dark-gray': colors.darkGray,
        'eh-gray': colors.gray,
        'eh-light-gray': colors.lightGray,
        'eh-white': colors.white,
        'eh-red': colors.red,
        'eh-orange': colors.orange,
        'eh-yellow': colors.yellow,
        'eh-green': colors.green,
        'eh-cyan': colors.cyan,
        'eh-blue': colors.blue,
        'eh-purple': colors.purple,
        'eh-selection-bg': colors.selectionBg,
      },
      fontFamily: {
        'mono': [
          'JetBrains Mono',
          'ui-monospace',
          'monospace',
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
