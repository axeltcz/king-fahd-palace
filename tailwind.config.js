/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#d4af37',
          500: '#c5a028',
          600: '#a8841f',
        },
        night: {
          900: '#0b0b0d',
          800: '#141416',
          700: '#1c1c1f',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
