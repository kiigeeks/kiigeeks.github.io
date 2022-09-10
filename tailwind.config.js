/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        }
      },
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
        third: '#64748b',
        dark: '#0f172a', //slate900
      },
      screens: {
        xs: '300px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      spacing: {
        'big': '27rem',
        'mdm': '25rem',
        'sml': '20rem',
        'xsml': '13rem',
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
