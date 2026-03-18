/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171A22',
        slate: '#6E7381',
        cream: '#F8FAFA',
        mist: '#EAF7F4',
        navy: '#232662',
        teal: '#4CC1B0',
        line: 'rgba(23, 26, 34, 0.08)'
      },
      boxShadow: {
        soft: '0 24px 70px rgba(20, 28, 46, 0.12)',
        card: '0 16px 45px rgba(35, 38, 98, 0.10)'
      },
      letterSpacing: { luxe: '0.18em' }
    }
  },
  plugins: []
};
