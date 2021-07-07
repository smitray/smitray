const colorFn =
  (colorName) =>
  ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${colorName}), ${opacityValue})`;
    }
    return `rgba(var(${colorName}))`;
  };

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        brand: "'Montserrat', sans-serif",
      },
      textColor: {
        skin: {
          base: colorFn('--color-text-base'),
        },
      },
      backgroundColor: {
        skin: {
          fill: colorFn('--color-fill'),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
