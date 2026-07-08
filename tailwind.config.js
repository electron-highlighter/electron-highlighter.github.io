// Colors are defined as CSS variables (RGB triplets) in
// src/static/css/tailwind.css, with one set per theme ([data-theme="dark"]
// and [data-theme="day"]). Each Tailwind token below references a variable so
// that every utility class (and its /opacity modifiers) re-themes automatically.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./**/*.html", "./src/**/*.yaml", "./src/**/*.yml", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        'eh-bg': token('eh-bg'),
        'eh-surface': token('eh-surface'),
        'eh-surface-2': token('eh-surface-2'),
        'eh-border': token('eh-border'),
        'eh-text': token('eh-text'),
        'eh-text-bright': token('eh-text-bright'),
        'eh-muted': token('eh-muted'),
        'eh-comment': token('eh-comment'),
        'eh-selection': token('eh-selection'),
        'eh-red': token('eh-red'),
        'eh-orange': token('eh-orange'),
        'eh-yellow': token('eh-yellow'),
        'eh-green': token('eh-green'),
        'eh-cyan': token('eh-cyan'),
        'eh-blue': token('eh-blue'),
        'eh-purple': token('eh-purple'),
        'eh-pink': token('eh-pink'),
      },
      fontFamily: {
        'sans': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
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
