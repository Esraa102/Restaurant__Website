/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#DCCA87",
        textColor: "#AAA",
      },
      fontFamily: {
        mainFont: ["Cormorant Upright", "sans"],
      },
    },
  },
  plugins: [],
};
