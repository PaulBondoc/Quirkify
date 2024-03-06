/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        "gradient-start": "#F67F29",
        "gradient-stop": "#FAB839",
        gray: "#292929",
        white: "#FFFAFA",
        black: "#171717",
      },
      boxShadow: {
        custom: "0 0 5px 1px #FAB839",
        "inner-custom": "inset 0px -2px 4px rgba(0,0,0,0.6)",
      },
      screens: {
        xs: "400px",
        xsm: "450px",
        sm: "650px",
        md: "850px",
        lg: "1115px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
