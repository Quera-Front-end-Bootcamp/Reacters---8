module.exports = {
  dark: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
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
    },
  },
  gridTemplateColumns: {
    '30/30/40': '37.75% 29% 29%',
  },

  plugins: [],
}