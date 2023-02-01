/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '353px',
      sm: '550px',
      md: '800px',
      lg: '976px',
      tb: '1104px',
      ft: '1282px',
      xl: "1440px",
      xxl: "1640px",
    },
    extend: {},
  },
  plugins: [],
}
