module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-1': '#320d3b',
      },
      screens: {
        'mobile': {'max': '640px'},
      },
      opacity: {
        '15': '0.15',
        '20': '0.20',
       }
    },
  },
  variants: {},
  plugins: [],
}
