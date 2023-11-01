/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fashion' : ['Fashion Wacks'],
      'playfair': ['Playfair Display SC'],
      'inria': ['Inria Serif'],
      'lora': ['Lora'],
      'noto': ['Noto Serif'],
      'nunito': ['Nunito'],
      'inter': ['Inter'],
      'montserrat': ['Montserrat'],


    },
    extend: {
      backgroundColor: {
        'teal-dark': '#032B2A',
        'grey-kie': '#848484',
        'grey-ray': '#D9D9D9',
        'pink-fu': '#FF005C',
        'white-off':'#F9F8F8',
        'gold-pi': '#CC911D',
        'gold-ha' : '#CC911D-800/10'
      },
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },

      maxWidth: { 50: '50%', 60: '60%', 70: '70%', 80: '80%', 90: '90%'},
    },
  },
  plugins: [],
}
