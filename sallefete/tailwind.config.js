/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors : {
          'pp' : '#F8DCDF'
      },
      fontFamily : {
        'quick'  : [`var(--font-quick)`, `sans-serif`],
        'gor' : [`var(--font-gor)`, `sans-serif`],
      }
    },
    screens: {
      'sm': {'max': '1350px'},
      'lg' : {'min' : '1351px'},
    },

  },
  plugins: [],
}
