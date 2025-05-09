export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A3AFF',
        secondary: '#F6F6F6',
        'text-primary': '#1A1D1F',
        'text-secondary': '#6F767E'
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out'
      }
    }
  },
  plugins: []
}