const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{ts,tsx,jsx,js}'],
    theme: {
        fontFamily: {
            raleway: ['Raleway', 'sans-serif'],
            source: ['Source', 'serif'],
            momcake: ['Momcake', 'serif'],
        },
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#1c464c',
                    variant: '#80a99f',
                },
                'secondary': {
                    DEFAULT: '#c6aa8b',
                    variant: '#e4d8c5',
                },
            },
            boxShadow: {
                'inset': "inset 0 2px 8px 0 rgb(0 0 0 / 0.2)"
            },
            animation: {
                'appear': '0.6s cubic-bezier(0.4, 0, 0.6, 1) 1.3s both appear',
                'from-top': '0.6s cubic-bezier(0.4, 0, 0.6, 1) 0.3s both from-top',
            },
            keyframes: {
                'appear': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'from-top': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-2rem)'
                    },
                    '100%': { opacity: '1' },
                },
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
    },
    plugins: [
        plugin(function({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}
