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
                primary: {
                    DEFAULT: '#1c464c',
                    variant: '#80a99f',
                },
                secondary: {
                    DEFAULT: '#c6aa8b',
                    variant: '#e4d8c5',
                },
            },
        },
    },
    plugins: [],
}
