/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.jsx'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      fontFamily: {
        poppins: '"Poppins",sans-serif'
      },
      colors: {
        'bg-color': '#e2f0f6'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#467ff7",
        },
      },
    ]
  }
}
