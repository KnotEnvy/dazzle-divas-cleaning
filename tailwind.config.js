/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Brand Colors from Logo
        'diva-pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899', // Main brand pink
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'diva-cyan': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // Main brand cyan
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'diva-navy': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49', // Deep navy from logo
        },
        'diva-gold': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Main brand gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Legacy support (keeping your old color names)
        'diva-blue': '#082f49', // Maps to diva-navy-950
        'diva-sky': '#06b6d4',  // Maps to diva-cyan-500
        'diva-yellow': '#f59e0b', // Maps to diva-gold-500
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'float-gentle': 'floatGentle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'fade-in-brand': 'fadeInBrand 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        sparkle: {
          '0%, 100%': { 
            opacity: '0.3', 
            transform: 'scale(0.8) rotate(0deg)' 
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.2) rotate(180deg)' 
          },
        },
        fadeInBrand: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          },
        },
      },
      boxShadow: {
        'colored-pink': '0 20px 25px -5px rgba(236, 72, 153, 0.2)',
        'colored-cyan': '0 20px 25px -5px rgba(6, 182, 212, 0.2)',
        'colored-gold': '0 20px 25px -5px rgba(245, 158, 11, 0.2)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-diva-primary': 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
        'gradient-diva-secondary': 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
        'gradient-diva-rainbow': 'linear-gradient(135deg, #f472b6 0%, #22d3ee 50%, #fbbf24 100%)',
        'gradient-diva-sophisticated': 'linear-gradient(135deg, #075985 0%, #db2777 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};