/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sec1': '#004458',
        'sec2': '#088568',
        'sec3': '#0cdbab',
        'sec4': '#00775b', 
        'textcolor':{100 :'#DBDBDB',500:'#aa2299',600:'#415D65', 900:'#ffffff'},
        'greencolor':{100:'#004458',200:'#09B28B', 500:'#003544',800:'#002C38'},
      }
  
      ,rotate: {
        '62': '71deg',
        '62-': '-70deg',
        '77-': '-84deg',
      }, 
      spacing: {
        '2r': '-2rem',
        '3.5r': '-3.5rem',
        '60v': '60vh',
        '1r': '-1rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/moshavere-y.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
      // transparent: 'transparent',
      // current: 'currentColor',

    },
    gridTemplateColumns:
    {
      '30/30/40': '37.75% 29% 29%',
      // '30/30/40': '38% 26% 26%',
    },
    plugins: [],
  }