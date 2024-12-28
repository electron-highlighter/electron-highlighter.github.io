const colors =  {
  red: '#f7768e',
  orange: '#ffd9af',
  yellow: '#fcf9c3',
  green: '#58ffc7',
  cyan: '#57f9ff',
  blue: '#82aaff',
  purple: '#d2a6ef',
  bgDark: '#141820', // dark background
  background: '#24283B', // background
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
        'eh-bg-dark': colors.bgDark,
        'eh-background': colors.background,
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
