<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

=======


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'navbar': '#1E1E1E', 
        "drop-down-bg":"#f9f9f9",
        "FooterBg" :"#01111D",
        "offersBg" : "#EFEFEF",
        "ShopNow"  :"#EB4545"
        
      },
      borderColor:{
         hr : "#656565"
      },
      textColor:{
        "highlight" :"#EB4545",
        "offersColor" :"#656565",
        "brown" :"#9B4616",
        "purple":"#94337E",
        "Grey"  :"#656565",
        "Blue" :"#454CEB",
        "green" :"#007994",
        "maroon" : "#940900"
      },
      fontFamily:{
        "heading" : "Manrope,Arial, sans-serif",
        "text" : "Montserrat,Arial, sans-serif",
        "product_detail" :"Inter, sans-serif;"
      },
      commonStyles: {
        'flex-row': 'flex items-center justify-between',
      },
      flex: {
        '25': '0 0 24%'
      },
      colors:{
        "RedBorder": "#EB4545",
        "brownBorder" :"#9B4616",
        "PurpleBorder" :"#94337E",
        "GreyBorder" :"#656565",
        "BlueBorder" :"#454CEB",
        "GreenBorder" : "#007994",
        "maroonBorder":"#940900"
      },
      borderWidth:{
        "30":"30px"
      },
      fill: {
        blur: '#00000033',
      }
    },
  },
  plugins: [],
}
>>>>>>> fa8b8d1bc0411f8181c31fac7d3ebbdc2c5a194e
