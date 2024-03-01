
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFD2D2", //light pink
        secondary: "#FFBD59", //yellowyorange
        secondarysecondary: "#FF66C4", //hot pink
        tertiary: "#FFBD59", //yellowyorange
        "black-100":"#FF66C4", //hot pink
        "black-200": "#FFC3E0", //kinda light pink
        "white-100": "#f3f3f3",  //white
      },
      boxShadow: {
        card: "0px 35px 120px -15px #FF66C4",  //card shadows
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
       //"hero-pattern": "url('/src/assets/clouds.jpg')",
      },
    },
  },
  plugins: [],
};
