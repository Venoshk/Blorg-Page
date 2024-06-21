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
        'Header': "hsl(356, 100%, 66%)",
        'Section': "hsl(237, 17%, 21%)",
        'Footer': "hsl(240, 10%, 16%)",
        'Hover': "hsl(355, 100%, 74%)"
      },
      backgroundImage:{
        'Home': "url(./src/assets/images/bg-pattern-circles.svg)",
        
      },
      backgroundSize:{
        'Size': "50%"
      },
      backgroundPosition:{
        'Position': "left",
        'PositionMobile': "top"

      },

      borderRadius:{
        'borderRadius': "0px 250px 0 250px",
        'borderRadiusMobile': " 0 100px 0 100px",
        'borderRadiusFooter': "0 100px 0 0"
      }

    },
  },
  plugins: [],
}
