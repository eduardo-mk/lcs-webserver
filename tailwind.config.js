/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./compositions/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'heros': "linear-gradient(to bottom, rgba(56,59,55, 0.5), rgba(235,182,172, 1)), url('/images/inicio.jpg')"
        'heros': "linear-gradient(to bottom, rgba(56,59,55, 0.5), rgba(235,182,172, 1)), url('/images/inicio.jpg')"
      },
      fontFamily: {
        // 'sans': ['Agrandir', 'Arial']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}