/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'aot',
  content: ['./theme/**/*.liquid'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Safelist classes from common patterns
    { pattern: /.*/ }, // This wildcard pattern will match all utilities
  ],
};
