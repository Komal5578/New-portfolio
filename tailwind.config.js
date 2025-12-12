/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // required
    "./src/**/*.{js,jsx,ts,tsx}", // also required
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "gradient": "gradient 3s ease infinite",
        "shiny": "shiny 3s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        shiny: {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
      },
    },
  },
  plugins: [],
}

