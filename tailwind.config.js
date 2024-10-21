/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
      },
    },
  },
  variants: {},
  plugins: [],
}

