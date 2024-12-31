/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              textAlign: 'left',
            },
            p: {
              marginBottom: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [scrollbarHide, typography],
};
