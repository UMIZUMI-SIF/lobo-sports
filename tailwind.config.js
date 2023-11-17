module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d1d5db", "100_01": "#d9d9d9" },
        gray: { 500: "#a6a6a6", 900: "#051341", "500_01": "#a0a0a0" },
        black: { 900: "#000000" },
        deep_purple: { 900: "#1501a1" },
        white: { A700_01: "#fdfdfd", A700_02: "#fffcfc", A700: "#ffffff" },
        deep_orange: { A400: "#ff4801" },
      },
      fontFamily: {
        arimohebrewsubsetitalic: "Arimo Hebrew Subset Italic",
        inter: "Inter",
        lato: "Lato",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
