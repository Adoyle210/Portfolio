/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
            accent: {
                light: "#B76E3C", // your warm accent
                dark: "#FDBA74",  // orange-300-ish
            },
        },
      },
    },
    plugins: [],
  };
  