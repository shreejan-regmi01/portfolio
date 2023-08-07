/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        dark: "url('/src/assets/bg-dark.jpg')"
      }
    }
  },
  plugins: []
}
