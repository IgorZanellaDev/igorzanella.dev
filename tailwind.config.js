module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "customerly-blue": "#2fb6fa",
        "iz-yellow-light": "#ffcc00",
        "iz-yellow-dark": "#ff9933",
        "iz-yellow-dark-darker-10": "#ff8914",
        "iz-blue-light": "#00ccff",
        "iz-blue-dark": "#005cb4",
        "iz-blue-dark-darker-10": "#0052a2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
