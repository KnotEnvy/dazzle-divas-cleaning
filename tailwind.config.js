/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'diva-pink': '#FF69B4',
        'diva-blue': '#000080',
        'diva-sky': '#87CEEB',
        'diva-yellow': '#FFD700',
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'float': 'float 2s ease-in-out infinite', // New floating animation
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
        float: { // New keyframe for floating animation
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
};
