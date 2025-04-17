/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",  // Changed "Primary" to "primary",
        white: "#FFFFFF",
        gray: "#ABB2BF",
        bgPrimary: "#282C33",
        bgSecondary: "#1E1E1E"


      },
      animation: {
      'spin-slow': 'spin 20s linear infinite',
    },

      fontSize: {
        content: '102.4rem',
        paddingContent:"17.1rem",
        body: "1.6rem", //regular text, semibold, logo bold, 
        headingPrimary: "3.2rem",// semibold
        headingSecondary: "2.4rem", // semibold
        paddingTop: "3.2rem",
        paddingBottom: "0.8rem",
        sectionMargin: "6.2rem",
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],  // Add Fira Code here
      },
    },
    

  },
  plugins: [],
}
