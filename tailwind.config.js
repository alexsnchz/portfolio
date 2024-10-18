/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        system: ['system-ui', 'sans-serif'],  // Define la fuente aquí
      },
    },
  },
  plugins: [],
}

