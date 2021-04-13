module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#ffffff",
        secondary: "#F3C959",
        primary_action: "#C54520",
        secondary_action: "#4169F2",
        font_primary_color: "#333",
        font_disable_color: "#888",
      },
      minHeight:{
        '40vh': '40vh'
      },
      minWidth:{
        '50vw': '50vw',
        '75vw': '75vw',
        '95vw': '95vw'

      }
    },
    screens: {
      'hideMenu': {'min':'320px', 'max':'1023px'},
      'showMenu': {'min':'1024px'}
    },
    fontFamily: {
      'poppins': ['"Open Sans"','sans-serif']
    },
    gridTemplateColumns:{
      '1frMinContent1fr': '1fr min-content 1fr',
      '1frOnly': '1fr',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
