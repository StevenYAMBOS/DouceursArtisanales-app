/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    colors: {
      'darkBleu': '#000433',
      'golden': '#F2CA42',
      'white': '#fff',
      'black': '#000000',
      'slate-50': '#FBFBFB',
    },
    extend: {},
  },
  plugins: [],
}