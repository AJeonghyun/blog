/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              marginTop: '0.5rem',  // Adjusts the top margin of headings
              marginBottom: '0.5rem',  // Adjusts the bottom margin of headings
            },
            'p': {
              marginBottom: '1rem', // Adjusts space below paragraphs
            }
          }
        }
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require('@tailwindcss/typography'),
  ],
}
