/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '26rem',
        '128': '32rem',
        '256': '38rem'
      }
    },
  },
  plugins: [],
}