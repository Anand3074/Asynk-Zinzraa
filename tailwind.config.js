import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
      'Fraunces': ['Fraunces'],
      'metro' : ['Metropolis Regular', 'sans-serif'],
      'font-sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto',
       "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'ont-serif': ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
    'font-mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      



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
})
