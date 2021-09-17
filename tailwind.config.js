module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "iz-yellow-dark": "#ff9933",
        "iz-yellow-light": "#ffcc00",
        "iz-blue-dark": "#005cb4",
        "iz-blue-light": "#00ccff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
