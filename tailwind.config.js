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
            },
            p: {
              marginBottom: '1rem',
            },
            pre: {
              maxWidth: 'none', // 코드 블록의 최대 너비 제거
              whiteSpace: 'pre-wrap', // 줄바꿈 허용
              wordBreak: 'break-word', // 긴 코드 줄 브레이크
            },
          },
        },
      },
    },
  },
  plugins: [scrollbarHide, typography],
};
