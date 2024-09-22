/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',  // Include all HTML and TypeScript files in the src directory
  ],
  theme: {
    extend: {backdropBlur: ['hover', 'focus'],},
  },
  plugins: [ require('@tailwindcss/forms'),],
};

