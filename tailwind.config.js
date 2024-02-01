module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
      },
      spacing: {
        '1/2': '50%',
        '2/3': '66.666667%',
      },
    },
  },
};
