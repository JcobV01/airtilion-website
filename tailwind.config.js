/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }
  
      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }
  
      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }
  
      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
  
      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
  
      'fold': { 'max': '345px' },
      // => @media (max-width: 325px) { ... }
    },
  },
  plugins: [],
};
