/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        light_pink: '#EAC5E8',
        red: '#fc3c44',
        light_red: '#f94c57',
        slate: '#c2cad7',
        grey: '#343433',
        bright_blue: '#0096ff',
      },
      fontFamily: {
        ibold: ["Inter-Bold", "sans-serif"],
        iextrabold: ["Inter-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}