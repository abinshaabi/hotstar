module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
       basic: {
        50: '#eff2f5',
        100: '#d2d7dd',
        200: '#b4bcc7',
        300: '#95a1b3',
        400: '#77879f',
        500: '#5d6d85',
        600: '#495568',
        700: '#353d49',
        800: '#20242c',
        900: '#0a0c10',
      },
      nav: {
        100: '#131927', //nav
        200: '#363849', //dropdown
        300: '#11151e', //dropdown hover

      }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
