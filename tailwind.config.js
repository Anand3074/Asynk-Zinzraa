export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
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
      'poppins': ['Poppins'],
      'italian': ['Italiana'],


    },
    extend: {
      backgroundColor: {
        'teal-dark': '#032B2A',
        'grey-kie': '#848484',
        'grey-ray': '#D9D9D9',
        'pink-fu': '#FF005C',
        'white-off':'#F9F8F8',
        'gold-pi': '#CC911D',
        'heart-bit': '#FF005C'
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
