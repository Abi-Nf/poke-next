import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,html,css,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      padding: {
        full: '100%',
      },
      colors: {
        'red-primary-ball': '#ee1515',
        'red-pure-ball': '#f00000',
        'grey-line-ball': '#222224',
        'grey-line-ambient': '#363638',
        'white-ball': '#f0f0f0',
        'milk-white-ball': '#f0f0f0',
      },
      fontFamily: {
        vt323: ['var(--font-vt323)', 'sans-serif'],
        pixelify: ['var(--font-pixelify)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
