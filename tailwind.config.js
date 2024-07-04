// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'diva-pink': '#FF69B4',
        'diva-blue': '#000080',
        'diva-sky': '#87CEEB',
        'diva-yellow': '#FFD700',
      },
    },
  },
  plugins: [],
}

