/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        alto: '#D9D9D9',
        silverChalice: '#B1AFAF',
        silver: '#CCCCCC',
        japaneseLaurel: '#008000',
        limeade: '#3AB701',
        sunsetOrange: '#FF4747',
        sherpaBlue: '#004C4C',
        jet: '#333333',
      },
      backgroundImage: {
        'fire-background': "url('../src/assets/images/fire.svg')",
      },
      animation: {
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
