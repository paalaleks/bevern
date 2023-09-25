/** @type {import('tailwindcss').Config} */

const customColors = {
  beige: {
    DEFAULT: '#e9edc9',
    100: '#3d4216',
    200: '#79842c',
    300: '#b3c146',
    400: '#ced788',
    500: '#e9edc9',
    600: '#edf1d4',
    700: '#f2f4df',
    800: '#f6f8ea',
    900: '#fbfbf4',
  },
  sea_green: {
    DEFAULT: '#5e8c61',
    100: '#131c13',
    200: '#263827',
    300: '#38543a',
    400: '#4b714e',
    500: '#5e8c61',
    600: '#7ba77e',
    700: '#9cbd9e',
    800: '#bdd3be',
    900: '#dee9df',
  },
  feldgrau: {
    DEFAULT: '#4e6151',
    100: '#0f1310',
    200: '#1f2620',
    300: '#2e3a30',
    400: '#3e4d40',
    500: '#4e6151',
    600: '#6b866f',
    700: '#8fa592',
    800: '#b4c3b6',
    900: '#dae1db',
  },
  van_dyke: {
    DEFAULT: '#3b322c',
    100: '#0c0a09',
    200: '#171411',
    300: '#231e1a',
    400: '#2f2823',
    500: '#3b322c',
    600: '#6a594e',
    700: '#978172',
    800: '#baaba1',
    900: '#dcd5d0',
  },
  old_rose: {
    DEFAULT: '#c2847a',
    100: '#2b1714',
    200: '#572e28',
    300: '#82453c',
    400: '#ad5c50',
    500: '#c2847a',
    600: '#ce9c95',
    700: '#dab5af',
    800: '#e7ceca',
    900: '#f3e6e4',
  },
};

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],

  theme: {
    fontFamily: {
      sans: ['var(--font-jakartaSans)'],
      serif: ['var(--font-mogra)'],
    },
    extend: {
      colors: {
        ...customColors,
        dark: customColors.van_dyke[500],
        light: customColors.beige[500],
        lighter: customColors.beige[300],
        accent: customColors.old_rose[500],
        'accent-active': customColors.old_rose[600],
        'accent-passive': customColors.old_rose[400],
        success: customColors.sea_green[500],
        error: customColors.old_rose[800],
      },
    },
  },
};
