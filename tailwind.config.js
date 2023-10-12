/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      dropShadow:{
        darkMd: ['0 4px 3px rgba(121, 55, 178, 0.10)', 
        '0 2px 2px rgba(121, 55, 178, 0.15)'],
        dark2xl: ['0 30px 19px rgba(121, 55, 178, 0.10)', 
        '0 18px 15px rgba(161, 95, 218, 0.15)']
      },
      fontFamily:{
        'Marker': 'Permanent Marker',
        'SC': 'Ysabeau SC'
      },
      colors:{
        primary:{
          color:{
            light:'#FF4F0F',
            dark:'#282a36'},
          hover: {
            light:'#ff6f3c',
            dark:'#a36898'},
          text: {
            light:'#F3F5F6',
            dark:'#F3F5F6'},
        },
        secondary: {
          color:{
            light:'#ff6f3c',
            dark:'#c05c96'},//c05c96
          hover:{
            light:'#ffa382',
            dark:''},
          text:{
            light:'#ff4f0f',
            dark:'#642E94'},
        },
        cardBg:'#282a36',
        background:{
          light: '#E3EAED',
          dark: '#191a21'
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};