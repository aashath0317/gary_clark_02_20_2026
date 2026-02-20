/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'bg-glass': 'rgba(20, 20, 20, 0.7)',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'accent-primary': '#ef4444',
        'accent-primary-hover': '#dc2626',
        'accent-secondary': '#3b82f6',
        'border-color': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.05)',

        'black-level': '#171717',
        'platinum-level': '#e5e7eb',
        'gold-level': '#fbbf24',
        'silver-level': '#9ca3af',
        'bronze-level': '#b45309',
        'all-madden-level': '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
