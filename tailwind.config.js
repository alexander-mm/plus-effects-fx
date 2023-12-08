/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        microflf: ['MicroFLF', 'sans-serif'],
        sterilict: ['Sterilict', 'sans-serif'],
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        century: ["Century Gothic Paneuropean", "sans-serif"],
        nexa: ['Nexa', "sans-serif"],
        gothamBold: ['Gotham Bold', 'sans-serif'],
        gothamRegular: ["Gotham Regular", 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "pale-red": "#FF0000",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}