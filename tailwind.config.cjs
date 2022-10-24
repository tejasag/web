/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        red: "#DC4D46",
        orange: "#E58340",
        yellow: "#F1ED5E",
        green: "#7EBB53",
        blue: "#5477BC",
        purple: "#7463A6",
      },
    },
  },
  plugins: [],
};
