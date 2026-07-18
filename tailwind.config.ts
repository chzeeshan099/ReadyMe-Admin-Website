import { yellow } from '@mui/material/colors';
import { Graduate } from 'next/font/google';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/rizzui/dist/*.{js,ts,jsx,tsx}', // must use this line to compile and generate our RizzUI components style
  ],
  darkMode: 'media',
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px', // only need to control product grid mode in ultra 4k device
    },
    extend: {
      fontSize: {
        'custom-34': '34px',
        'custom-56': '56px',
      },
      width: {
        17: '17%',
        18: '18%',
      },
      height:{
        '500px': '500px',
        '600px': '600px',

      },
      colors: {
        gray: {
          0: 'rgb(var(--gray-0) / <alpha-value>)',
          50: 'rgb(var(--gray-50) / <alpha-value>)',
          100: 'rgb(var(--gray-100) / <alpha-value>)',
          150: 'rgb(var(--gray-150) / <alpha-value>)',
          200: 'rgb(var(--gray-200) / <alpha-value>)',
          250: 'rgb(var(--gray-250) / <alpha-value>)',
          300: 'rgb(var(--gray-300) / <alpha-value>)',
          350: 'rgb(var(--gray-350) / <alpha-value>)',
          400: 'rgb(var(--gray-400) / <alpha-value>)',
          500: 'rgb(var(--gray-500) / <alpha-value>)',
          600: 'rgb(var(--gray-600) / <alpha-value>)',
          700: 'rgb(var(--gray-700) / <alpha-value>)',
          750: 'rgb(var(--gray-750) / <alpha-value>)',
          800: 'rgb(var(--gray-800) / <alpha-value>)',
          850: 'rgb(var(--gray-850) / <alpha-value>)',
          900: 'rgb(var(--gray-900) / <alpha-value>)',
          1000: 'rgb(var(--gray-1000) / <alpha-value>)',
          1100: 'rgb(var(--gray-1100) / <alpha-value>)',
          1200: 'rgb(var(--gray-1200) / <alpha-value>)',
          1300: 'rgb(var(--gray-1300) / <alpha-value>)',
          1400: 'rgb(var(--gray-1400) / <alpha-value>)',
          1500: 'rgb(var(--gray-1500) / <alpha-value>)',
          1600: 'rgb(var(--gray-1600) / <alpha-value>)',
        },
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        primary: {
          lighter: 'rgb(var(--primary-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary-invex-default) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
          white: 'rgb(var(--white) / <alpha-value>)',
        },
        webPrimary: {
          lighter: 'rgb(var(--primary-invex-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary-invex-default) / <alpha-value>)',
          dark: 'rgb(var(--primary-invex-dark) / <alpha-value>)',
          foreground: 'rgb(var(--primary-invex-foreground) / <alpha-value>)',
          gradient: ' var(--primary-invex-background)',
          blue: 'var(--primary-blue)',
          bgBlue: 'var(--primary-bg-blue)',
          bgdark: 'var(--primary-invex-background-dark)',
        },
        webSecondary: {
          light: 'rgb(var(--secondary-lighter) / <alpha-value>)',
          lighter: 'rgb(var(--secondary-invex-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--secondary-invex-default) / <alpha-value>)',
          dark: 'rgb(var(--secondary-invex-dark) / <alpha-value>)',
          foreground:
            'rgb(var(--webSecondary-invex-foreground) / <alpha-value>)',
        },
        webText: {
          lighter: 'rgb(var(--primary-text-invex-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary-text-invex-default) / <alpha-value>)',
          dark: 'rgb(var(--primary-text-invex-dark) / <alpha-value>)',
          foreground:
            'rgb(var(--primary-text-invex-foreground) / <alpha-value>)',
        },
        // webPrimary: 'red',
        webLight: '#ffa5a500',
        webSecond: '#fff',
        webHeading: '#333',
        dashBordBorder: '#0B272A',
        dashBordCardsBG: '#01121A',
        footerBG: 'linear-gradient(0deg, #F5EEC6 0%, #F7F1D3 117.58%)',

        // webText: '#333',

        secondary: {
          lighter: 'rgb(var(--secondary-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--secondary-default) / <alpha-value>)',
          dark: 'rgb(var(--secondary-dark) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },
        red: {
          'light-100': 'rgb(var(--red-light) / <alpha-value>)',
          lighter: 'rgb(var(--red-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--red-default) / <alpha-value>)',
          dark: 'rgb(var(--red-dark) / <alpha-value>)',
          1300: 'rgb(var(--red-1300) / <alpha-value>)',
        },
        orange: {
          lighter: 'rgb(var(--orange-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--orange-default) / <alpha-value>)',
          dark: 'rgb(var(--orange-dark) / <alpha-value>)',
        },
        blue: {
          light: 'rgb(var(--blue-light) / <alpha-value>)',
          lighter: 'rgb(var(--blue-lighter) / <alpha-value>)',
          lightest: 'rgb(var(--blue-lightest) / <alpha-value>)',
          DEFAULT: 'rgb(var(--blue-default) / <alpha-value>)',
          dark: 'rgb(var(--blue-dark) / <alpha-value>)',
        },
        greenPrimary: {
          light: 'rgb(var(--green-light) / <alpha-value>)',
          lighter: 'rgb(var(--green-lighter) / <alpha-value>)',
          500: 'rgb(var(--green-500) / <alpha-value>)',
          DEFAULT: 'rgb(var(--green-default) / <alpha-value>)',
          darker: 'rgb(var(--green-darker) / <alpha-value>)',
          dark: 'rgb(var(--green-dark) / <alpha-value>)',

          // theme greeen colors
          50: 'rgb(var(--green-lightt) / <alpha-value>)',
          100: 'rgb(var( --green-100) / <alpha-value>)',
          200: 'rgb(var( --green-200) / <alpha-value>)',
          300: 'rgb(var(--green-300) / <alpha-value>)',
          350: 'rgb(var(--green-350) / <alpha-value>)',
          400: 'rgb(var(--green-400) / <alpha-value>)',
          900: 'rgb(var(--green-900) / <alpha-value>)',
          950: 'rgb(var(--green-950) / <alpha-value>)',
          darks: 'rgb(var(--green-darks) / <alpha-value>)',
          purple: 'rgb(var(--green-purple) / <alpha-value>)',
          yellow: 'rgb(var(--green-yellow) / <alpha-value>)',
          blue: 'rgb(var(--green-gradient-blue) / <alpha-value>)',
          secodarydark: 'rgb(var(--green-secondary-dark) / <alpha-value>)',
          600: 'rgb(var( --green-600) / <alpha-value>)',
          700: 'rgb(var(--green-700) / <alpha-value>)',
          750: 'rgb(var(--green-750) / <alpha-value>)',
          whitishdark: 'rgb(var(--black-grayish-dark) / <alpha-value>)',
          yellowish: 'rgb(var(--yellowish) / <alpha-value>)',
          1000: 'rgb(var(--green-1000) / <alpha-value>)',
          1100: 'rgb(var( --green-1100) / <alpha-value>)',
          footerline: 'rgb(var(--footer-line) / <alpha-value>)',
          footerbg: 'rgb(var(--footer-bg) / <alpha-value>)',
        },
        yellow: {
          primary: 'rgb(var(--yellow-primary) / <alpha-value>)',
          secondary: 'rgb(var(--yellow-secondary) / <alpha-value>)',
          250: 'rgb(var(--yellow-250) / <alpha-value>)',
          350: 'rgb(var(--yellow-350) / <alpha-value>)',
        },
        pink: {
          primary: 'rgb(var(--pink-primary) / <alpha-value>)',
          secondary: 'rgb(var(--pink-secondary) / <alpha-value>)',

        },
        lightgray: {
          primary: 'rgb(var(--gray-light) / <alpha-value>)',
          secondary: 'rgb(var(--footer-bg-colr) / <alpha-value>)',
          100: 'rgb(var(--light-gray) / <alpha-value>)',
          

        },
        black: {
          light: 'rgb(var(--black-light) / <alpha-value>)',
          dark: 'rgb(var(--black-dark) / <alpha-value>)',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        lexend: ['var(--font-lexend)'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      // required these animations for the Loader component
      animation: {
        marquee: 'scroll 0s linear infinite',
        blink: 'blink 1.4s infinite both;',
        'scale-up': 'scaleUp 500ms infinite alternate',
        'spin-slow': 'spin 4s linear infinite',
        popup: 'popup 500ms var(--popup-delay, 0ms) linear 1',
        skeleton: 'skeletonWave 1.6s linear 0.5s infinite',
        'spinner-ease-spin': 'spinnerSpin 0.8s ease infinite',
        'spinner-linear-spin': 'spinnerSpin 0.8s linear infinite',
        comeFromRight: 'comeFromRight linear',
      },
      backgroundImage: {
        skeleton: `linear-gradient(90deg,transparent,#ecebeb,transparent)`,
        'skeleton-dark': `linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)`,
        'light-gradient': 'linear-gradient(to right, #42B05F, #021931)',
        'dark-gradient': 'linear-gradient(to right, #FFCC50, #45B65F)',
        'soft-pink': 'var(--gradient-cream)',
    
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1rem))' },
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100%': { opacity: '0.2' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        popup: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        skeletonWave: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '50%': {
            /* +0.5s of delay between each loop */
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        spinnerSpin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        comeFromRight: {
          '0%': {
            transform: 'translatex(3000px)',
          },
          '100%': {
            transform: 'translatex(0px)',
          },
        },
      },

      content: {
        underline: 'url("/public/underline.svg")',
      },
      boxShadow: {
        profilePic:
          '0px 2px 4px -2px rgba(0, 0, 0, 0.10), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
           yellowGlow: '0 0 10px 4px rgba(250, 204, 21, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    plugin(function ({ addVariant }) {
      // required this to prevent any style on readOnly input elements
      addVariant('not-read-only', '&:not(:read-only)');
    }),
  ],
} satisfies Config;
