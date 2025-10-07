import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


module.exports = {
      plugins: [
        require('tailwind-scrollbar-hide')
      ]
    }

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        brown: {
          50:  "#fdf8f6",
          100: "#f5ebe6",
          200: "#e6d5cc",
          300: "#d6bfb3",
          400: "#b08982",
          500: "#8c5a4b", // base brown
          600: "#73473a",
          700: "#5a362d",
          800: "#41251f",
          900: "#291612",
          950: "#1b0d0a",
        },
        beige: {
          50:  "#fdfcf9",
          100: "#faf5eb",
          200: "#f5e9d6",
          300: "#e9d7b7",
          400: "#dcc39a",
          500: "#c9a86f", // base beige
          600: "#a88754",
          700: "#876b43",
          800: "#665033",
          900: "#453622",
          950: "#2c2216",
        },  
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
export default config;
