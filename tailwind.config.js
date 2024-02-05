/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     colors: {
    'normal': '#1C0E40',
		'white': '#f5f3ea',
		'footer': '#006241',
		'lightGreen': '#DFF9BA'
      },
    fontFamily: {
      pop: ['Poppins','sans-serif'],
    },
    extend: {}, 
  },
  plugins: [],
}

