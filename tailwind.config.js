/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: 'rgb(251, 116, 19)', 
        customGrey: 'rgb(149, 158, 172)', 
        customDarkBlue: 'rgb(37, 45, 55)',
        customVeryDarkBlue: 'rgb(18, 20, 23)',
      },
      screens: {
        mobile: "375px"
      }
    },
  },
  plugins: [],
};

