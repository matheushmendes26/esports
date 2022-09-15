/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy: "url('/background__galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 33.08%, #43E7AD 33.94%, #E1D55D 34.57%)', 
      }
    },
  },
  plugins: [],
}
