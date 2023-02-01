/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      'textcolor':{100 :'#DBDBDB',500:'#aa2299',600:'#415D65', 900:'#ffffff'},
      'greencolor':{100:'#004458',200:'#09B28B', 500:'#003544',800:'#002C38'},
    },
    gridTemplateColumns:
    {
      '30/30/40': '37.75% 29% 29%',
      // '30/30/40': '38% 26% 26%',
    }
  },
},

    
  plugins: [],
}
