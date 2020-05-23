const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './public/**/*.html'
  ],
  theme: {
    extend: {
      borderWidth: {
        '6': '6px',
      },
      colors: {
        // override Tailwind UI colors with the defaults
        ...defaultTheme.colors,
        mp: {
          100: 'hsl(116, 0%, 95%)',
          200: 'hsl(116, 0%, 92%)',
          300: 'hsl(116, 0%, 89%)',
          500: 'hsl(116, 0%, 60%)',
          800: 'hsl(116, 0%, 16%)',
          900: 'hsl(116, 0%, 13%)',
        },
      },
      maxHeight: {
        '968': '968px',
        '968x2': '1936px',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '7/10': '70%',
        '3/4': '75%',
      },
      fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans
        ],
        condensed: ['"Roboto Condensed"'],
      },
      screens: {
        'bs-sm': '576px',
        'bs-md': '768px',
        'bs-lg': '992px',
        'bs-xl': '1200px',
      }
    },
  },
  variants: {},
  plugins: [
    // for new sizes, mostly
    require('@tailwindcss/ui')
  ],
}
