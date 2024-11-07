/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        black: "#1c1c19",
        white: "#fafaf9",
      },
      fontFamily: {
        title: ["RampartOne", "Roboto", "system-ui"],
        montserrat: ["Montserrat", "system-ui"],
        "public-sans": ["PublicSans", "system-ui"],
      },
      fontSize: {
        "h1-desktop": ["7rem", { lineHeight: "7rem" }],
        "h1-mobile": ["3rem", { lineHeight: "3rem" }],
        "h2-desktop": ["3.5rem", { lineHeight: "3.5rem", fontWeight: "600" }],
        "h2-mobile": ["2rem", { lineHeight: "2rem", fontWeight: "600" }],
        "h3-desktop": ["2rem", { lineHeight: "2rem", fontWeight: "500" }],
        "h3-mobile": ["1.5rem", { lineHeight: "1.5rem", fontWeight: "500" }],
        "p-desktop": ["1.5rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "p-mobile": ["1rem", { lineHeight: "1rem", fontWeight: "400" }],
        "p-sm-desktop": ["1rem", { lineHeight: "1rem", fontWeight: "400" }],
        "p-sm-mobile": ["0.25rem", { lineHeight: "0.25rem", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
