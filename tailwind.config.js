/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        dark: "url('/src/assets/bg-dark.jpg')"
      }
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'dark-primary': '#000', //dark
      'dark-secondary': '#1d1d1d', //dark
      'text-gray': '#a6a6a6', //gray
      'text-gray': '#a6a6a6', //gray
      'accent-red': '#fa5252', //red
      'accent-blue': '#1b74e4', //blue
      'accent-green': 'rgb(106, 181, 185)'
    }),
    fontFamily: {
      primary: ['Roboto Slab', 'serif']
    }
  },
  plugins: []
}
