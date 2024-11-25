/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      "primary-cyan": "hsl(158, 36%, 37%)",
      "primary-cream": "hsl(30, 38%, 92%)",
      "neutral-dark-blue": "hsl(212, 21%, 14%)",
      "neutral-dark-grayishblue": "hsl(228, 12%, 48%)",
      "neutral-white": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      fraunces: ["Fraunces"],
    },
  },
  plugins: [],
};
