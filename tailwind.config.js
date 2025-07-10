export default {
  content: [
    "./src/**/*.{html,js}",
    "/*.html"
  ],
  theme: {
    extend: {
        animation: {
        'slide-in': 'slide-in 0.5s ease-in-out',
        'slide-out': 'slide-out 0.5s ease-in-out'
        },
        keyframes: {
            'slide-in': {
                '0%' : {transform: 'translate(-100%)'},
                '100%': {transform: 'translate(0)'}
            }
        }
    },
  plugins: [],
  }
}
