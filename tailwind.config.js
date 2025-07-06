/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#000f3d',
        yellow: '#FFD700',
        white: '#ffffff',
        gray: '#cccccc',
        'dark-gray': '#4a5568',
        'light-gray': '#f7fafc',
      },
      backgroundColor: {
        navy: '#000f3d',
        yellow: '#FFD700',
        white: '#ffffff',
        gray: '#cccccc',
        'dark-gray': '#4a5568',
        'light-gray': '#f7fafc',
      },
      textColor: {
        navy: '#000f3d',
        yellow: '#FFD700',
        white: '#ffffff',
        gray: '#cccccc',
        'dark-gray': '#4a5568',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
