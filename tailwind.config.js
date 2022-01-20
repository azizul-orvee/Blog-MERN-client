module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dongle: ['Dongle', 'sans-serif'],
        mochiy: ['Mochiy Pop P One', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
