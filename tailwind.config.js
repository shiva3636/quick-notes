/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgSidebar': '#eceefd',
        'logoBorder': '#6366f1',
      },
      borderColor: {
        customOrange: '#FF5733',
      },
      height: {
        'h-4.5': '4.5rem',
      },
    },
  },
  plugins: [],
}
