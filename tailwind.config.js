/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        Primary: "#dbb3ab",
        Secondary: "#ab6c6c",
        Black: "#000000",
        White: "#ffffff",
        Accent: "#f6d4d4",
        grey: "#1e1e1e",
        lightgrey: "#f5f5f5",
        Pgrey: "#a8a8a8",
        Pgold: "#e8b758",
        Pbrown: "#502518"
       },
       fontSize: {
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        x2l: "26px",
        x3l: "32px",
        x4l: "48px"
       },
       fontFamily: {
        radiocanada: ["Radio Canada", "sans-serif"],
        sunflower: ["Sunflower", "sans-serif"],
       },
       borderRadius: {
        none: "0",
        xs: "0.3125rem",
        sm: "1.25rem",
        full: "3.125rem"
       }
    },
  plugins: [],
}

