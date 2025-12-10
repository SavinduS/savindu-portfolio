/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617', // 60% - Slate 950
        surface: '#0f172a',    // Slightly lighter for cards
        textSecondary: '#94a3b8', // 30% - Slate 400
        primary: '#06b6d4',       // 10% - Cyan 500 (The Tech Glow)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}