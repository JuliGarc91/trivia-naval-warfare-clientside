/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wine':'#593943', // sunken ship color
        'dark-red':'#815e69', // can be used - not sure where
        'hit-red':'#b72d51', // for hits
        // --- main colors ---
        'forest':'#3a5139', // battlefield
        'forest-btn':'#2a3e2a',
        'light-navy':'#54677c', // battlefield
        'navy':'#2f4255' // battlefield
      },
      fontFamily: {
        "kode-mono": ['"Kode Mono"', "monospace"],
        "black-ops": ['"Black Ops One"',"system-ui"],
        "orbitron": ['"Orbitron"', "sans-serif"]
      },
      fontWeight: {
        // Define weight classes from 100 to 900
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
    },
  },
  plugins: [],
}

