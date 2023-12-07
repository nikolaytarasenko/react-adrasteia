/** @type {import('tailwindcss').Config} */
exports.default = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#213887',
          90: '#142251'
        },
        gray: {
          50: '#F3F6F9',
          90: '#989EB1'
        }
      }
    },
  },
  plugins: [],
}