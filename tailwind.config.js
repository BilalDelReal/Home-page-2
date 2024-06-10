/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "orange-strong": "hsl(22, 89%, 52%)",
        "orange-hover": "hsl(22, 100%, 69%)",
        "blue-dark": "hsl(220, 50%, 17%)",
        "grey-strong": "hsl(221, 23%, 58%)",
        "grey-light": "hsl(198, 28%, 93%)",
        "white": "hsl(0, 0%, 100%)",
      }
    },

  },
  plugins: [],
}

