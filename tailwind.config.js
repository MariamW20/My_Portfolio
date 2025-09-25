/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#10b981", // jade/emerald-500
          dark: "#059669",    // jade/emerald-600
        },
        accent: "#34d399",    // emerald-400
        muted: "#94a3b8",     // slate-400
        dark: "#0b0f14",      // near-black
      },
    },
  },
  plugins: [],
};

