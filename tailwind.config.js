module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "split-purple-yellow":
          "linear-gradient(to top left, #FFD43A 50% ,#6F34FE  50%);",
      },
    },
    fontFamily: { poppins: ["Poppins", "serif"] },
  },
  plugins: [],
};
