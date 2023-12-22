/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '700': '700px',
        '600': '600px',
        '500': '500px',
        '450': '450px',
        '350': '350px',
        '360': '360px',
      },
      height: {
        '400': '400px',
      }
    },
  },
  plugins: [],
  darkMode: 'class',

}
