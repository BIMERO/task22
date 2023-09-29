/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        brand_primary:{
          50: '#F9FAFF',
          100: '#E9EFFF',
          150: '#D1DDFF',
          200: '#1D4ED8',
          250: '#037092',
          
        },
        brand_neutral:{
          50: '#FFFFFF',
          100: '#F2F2F2',
          150: '#F8F8F8',
          200: '#F3FAFC',
          250: '#ECECEC',
          300: '#F3F3F4',
          350: '#EEEEEE',
          400: '#D9D9D9',
          450: '#9AA6AC',
          500: '#444444',
          550: '#0B0B0B',
        }
      },
    },
  },
  plugins: [],
}

