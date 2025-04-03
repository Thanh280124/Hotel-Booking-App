const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      perspective: {
      'none': 'none',
      '500': '500px',
      '1000': '1000px',
      '2000': '2000px',
    },
    transformStyle: {
      'preserve-3d': 'preserve-3d',
    },
    backfaceVisibility: {
      hidden: 'hidden',
    },
  },
    colors: {
      'primary': '#FFCE1A',
      'secondary': '#0d0842',
      'blackBG': '#F3F3F3',
      'Favorite': '#FF5841',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      green: colors.green,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.stone,
      sky: colors.sky,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
      red:colors.red
           
     
    },
    fontFamily:{
      'primary': ["Montserrat", "sans-serif"],
      'secondary': ["Nunito Sans", "sans-serif"],
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-500': { perspective: '500px' },
        '.perspective-1000': { perspective: '1000px' },
        '.perspective-2000': { perspective: '2000px' },
      })
    }
  ]
}

