module.exports = {
  theme: {
    minWidth: {
      "14": "3.5rem",
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
  ],
};
