/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "colorWhile": "hsl(0, 0%, 100%)",
        "colorTitle": "hsl(208, 49%, 24%)",
        "colorBtn": "hsl(356, 100%, 66%)",
        "colorVeryDark": "hsl(207, 13%, 34%)"
        
      },
      backgroundColor:{
        Header: "hsl(356, 100%, 66%)",
        Hover: "hsl(355, 100%, 74%)"
      },

    },
  },
  plugins: [],
}