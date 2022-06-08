module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      classic: ["Work Sans"],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#0101010",
          100: "#0a0b1e",
          200: "#0f1115",
          300: "#0f1115",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  plugins: [],
};
