module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-white": "#E8E8E8",
        "dark-blue": "#2C3C4D",
        "light-blue": "#647D94",
        myActiveColor: "#FF6653",
        "border-gray": "#E3E3E3",
        "text-gray": "#ABABAB",
        "button-bg": "#1EA59A",
        "section-bg": "#F8FAFC",
        "short-title": "#8C959F",
      },
      fontFamily: {
        mulish: "Mulish",
      },
      spacing: {
        5.5: "32px",
      },
    },
  },
  plugins: [],
};
