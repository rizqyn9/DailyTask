const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // mode: process.env.NODE_ENV ? 'jit' : undefined,
  mode: "jit",
  darkMode: "class",
  theme: {
    screens: {
      md: "640px",
      lg: "1024px",
      xl: "1500px", // this is the "design resolution"
    },

    extend: {
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        // sans: ['Matter', ...defaultTheme.fontFamily.sans],
        sans: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        rowdies: ["Rowdies", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xl: "1.375rem", // 22px
        "2xl": "1.5625rem", // 25px
        "3xl": "1.875rem", // 30px
        "4xl": "2.5rem", // 40px
        "5xl": "3.125rem", // 50px
        "6xl": "3.75rem", // 60px
        "7xl": "4.375rem", // 70px
      },
      gridTemplateRows: {
        "max-content": "max-content",
      },
      spacing: {
        "5vw": "5vw", // pull featured sections and navbar in the margin
        "8vw": "8vw", // positions hero img inside the margin
        "10vw": "10vw", // page margin
      },
      height: {
        hero: "min(60rem, calc(100vh - 10rem))", // screen - navbar height (lg: only)
      },
      maxWidth: {
        "8xl": "96rem",
      },
      maxHeight: {
        "50vh": "50vh", // max height for medium size hero images
        "75vh": "75vh", // max height for giant size hero images
      },
      rotate: {
        "-135": "-135deg",
        135: "135deg",
      },
    },
  },
  content: ["./app/**/*.{ts,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
