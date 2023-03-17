/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      green: {
        400: "#00C368",
      },
      slate: {
        100: "#E7EBF0",
        200: "#A6ABBD",
        400: "#2E3A59",
      },
      blue: {
        100: "#F8FBFF",
      },
      gray: {
        100: "#F5F5F5",
      },
    },
    extend: {
      spacing: {
        0.25: "0.0625rem",
        0.75: "0.1875rem",
        2.5: "0.625rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        9.5: "2.375rem",
        11.5: "2.875rem",
        13: "3.25rem",
        21: "5.25rem",
        38: "9.5rem",
        42: "10.5rem",
        46: "11.5rem",
        90: "22.5rem",
        134: "33.5rem",
      },
      fontSize: {
        base: ["16px", "18.75px"],
        "4xl": ["40px", "46.88px"],
      },
      boxShadow: {
        md: "0px 8px 16px rgba(0, 195, 104, 0.4)",
        base: "0px 8px 15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
