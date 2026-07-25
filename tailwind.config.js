/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        obsidian: '#08090a',
        surface: {
          DEFAULT: '#0f1117',
          hover: '#161922',
          card: 'rgba(15, 17, 23, 0.7)',
        },
        hairline: 'rgba(255, 255, 255, 0.08)',
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(99, 102, 241, 0.15)',
        'glow-md': '0 0 40px -10px rgba(99, 102, 241, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
      }
    },
  },
  plugins: [],
}
