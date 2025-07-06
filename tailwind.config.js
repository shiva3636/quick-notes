/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      outlineOffset: {
        '-1': '-1px',
      },
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
      width: {
        'tw-1': "1rem",
        'tw-2': "2rem",
        'tw-3': "3rem",
        'tw-4': "4rem",
      }
    },
  },
  plugins: [],
}
