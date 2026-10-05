/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090d12',
        surface: '#0f172a',
        accent: '#f5be5f',
        text: '#e2e8f0',
        muted: '#94a3b8',
      },
      boxShadow: {
        glow: '0 0 28px rgba(245, 190, 95, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

