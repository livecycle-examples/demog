module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
          "lc-plum": "#85008F",
          "lc-black": "#110E1E",
          "lc-grey": "#7E93A7",
          "lc-white": "#FFFFFF",
          "lc-night": "#001C66"
      },
        opacity: {
         '10': '0.1',
         '20': '0.2',
         '95': '0.95',
        },
    },
  },
  variants: {},
  plugins: [],
}
