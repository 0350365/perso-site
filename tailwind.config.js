/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "default": "url(../src/assets/images/me.jpg)",
      },
    },
  },
  plugins: [],
};
