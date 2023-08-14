/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'kb-primary-color': '#fed447',
        'kb-second-color': '#274F6B',
        'kb-text-background': 'rgba(254, 236, 78, 0.19)',
        'kb-background': '#F2F7FA',
        'kb-neutral-900': '#1F2223',
        'kb-neutral-700': '#363939',
        'kb-neutral-500': '#57595A',
        'kb-neutral-300': '#8E9090',
        'kb-neutral-100': '#D2D3D3',
        'kb-neutral-50': '#E8E8E8',
        'kb-neutral-white': '#FFF',
      },



      backgroundImage: () => ({
        'kb-primary-gradient': `linear-gradient(45deg, #FDED4F 0%, #FFB649 100%)`,
        'kb-keycloak-gradient': `linear-gradient(227deg, #008AAA 0%, #00B8E3 100%)`,
      }),

    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};

