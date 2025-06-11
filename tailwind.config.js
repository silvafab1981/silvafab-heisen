<<<<<<< HEAD
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
      },
    },
  },
>>>>>>> b147f74 (Primera versión estilo Heisen)
  plugins: [],
}