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
        lightpink: '#EAC5E8',
        red: '#FF0000',
      },
      fontFamily: {
        ibold: ["Inter-Bold", "sans-serif"],
        iextrabold: ["Inter-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}