/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      'darkBleu': '#000433',
      'golden': '#F2CA42',
      'white': '#fff',
      'black': '#000000',
      'slate-50': '#F8FAFC',
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins:  [require('flowbite/plugin')],
}