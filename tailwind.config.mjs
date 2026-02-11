/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Water/nature color palette
        'creek': {
          50: '#f0f9f4',
          100: '#dbf0e3',
          200: '#b9e1ca',
          300: '#8acaa8',
          400: '#59ad82',
          500: '#389167',
          600: '#287452',
          700: '#225d44',
          800: '#1e4a38',
          900: '#1a3d2f',
        },
        'water': {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffc',
          300: '#7cc7fa',
          400: '#36abf5',
          500: '#0c90e6',
          600: '#0072c4',
          700: '#015a9f',
          800: '#064d83',
          900: '#0b406d',
        },
        'earth': '#3d3229',
        'sand': '#f5f0e8',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
