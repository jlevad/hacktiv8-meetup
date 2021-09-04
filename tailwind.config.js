module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
       'cardBanner': '1fr 4fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
