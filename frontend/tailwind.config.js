/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sierra: {
          'primary': '#8731FB',
          'secondary': '#00CD00',
          'accent': '#FF5FFF',
          'dark': '#1D1D1B',
          'white': '#FFFFFF',
        },
      },
      fontFamily: {
        'sans': ['Google Sans Flex', 'sans-serif'],
        'headings': ['Google Sans Flex', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '900' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}