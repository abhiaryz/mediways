/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#000A2D",

        // lightBlue: "#3267FF",
        lightBlue: "#00367d",
        skyBlue: "#2087FF",
        muted: "#636571",
        transparent: "#CBD9FF",
        extraDark: "#00071D",
        fadeBlue: "#5A81EE",
      },
      backgroundSize: {
        "50%": "100rem",
      },
      borderRadius: {
        "4xl": "2.7rem",
        half: "50%",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
