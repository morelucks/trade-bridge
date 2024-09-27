/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          100: "#BFBFBF",
          200: "#F79E1B",
          300: "#FBBC04",
          400: "#003366"
        }
      },
    },
  },
  plugins: [],
}