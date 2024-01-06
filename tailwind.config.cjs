/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      content: {
        hero: "url('./assets/hero-bg-pattern.png')",
      },
      backgroundImage: {
        "bg-hero-mobile": "url('./assets/hero-bg-pattern.png')",
        "bg-clients": "url(./assets/clients-bg.png)"
      }
    },
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px"
    },
  },
  plugins: [],
}