module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        translation: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(12rem)" },
        },
      },
      animation: {
        translation: "translation 3s linear infinite",
        spin: "spin 2s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
