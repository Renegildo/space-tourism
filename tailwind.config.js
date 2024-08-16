/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          300: "#D0D6F9",
          900: "#0B0D17",
        },
        white: "#FFFFFF",
      },
      // spacing: {
      //   25: "2px",
      //   50: "4px",
      //   100: "8px",
      //   150: "12px",
      //   200: "16px",
      //   300: "24px",
      //   400: "32px",
      //   500: "40px",
      //   600: "48px",
      //   800: "64px",
      //   1000: "80px",
      //   1200: "96px",
      //   1600: "128px",
      // },
      fontFamily: {
        bellefair: ["Bellefair"],
        "barlow-condensed": ["Barlow Condensed"],
      },
    },
  },
  plugins: [],
};
