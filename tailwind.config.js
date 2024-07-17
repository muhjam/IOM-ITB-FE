/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#404040",
          DEFAULT: "#404040",
          dark: "#000000",
        },
        secondary: {
          light: "#EA8389",
          DEFAULT: "#EA8389",
          dark: "#BF4B52",
        },
        // other custom colors
        customGreen: {
          light: "#A7F3D0",
          DEFAULT: "#10B981",
          dark: "#065F46",
        },
        customBlue: {
          light: "#3267E3",
          DEFAULT: "#3267E3",
          dark: "#065F46",
        },
        colorText: {
          light: "#404040",
          DEFAULT: "#404040",
          dark: "#065F46",
        },
        colorPurple: {
          light: "#4C4DDC",
          DEFAULT: "#4C4DDC",
          dark: "#3267E3",
        },
        main: {
          light: "#003793",
          DEFAULT: "#003793",
          dark: "#003793",
        },
        colorBlack: {
          light: "#313539",
          DEFAULT: "#313539",
          dark: "#313539",
        },
        colorText: {
          light: "#4C4C4C",
          DEFAULT: "#4C4C4C",
          dark: "#4C4C4C",
        },
        colorSecond: {
          light: "#F2F7FC",
          DEFAULT: "#F2F7FC",
          dark: "#F2F7FC",
        },
      },
    },
  },
};
