
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#090e17',
                primary: {
                    DEFAULT: '#00F0FF',
                    dim: '#00deec',
                    container: '#00eefc',
                },
                secondary: {
                    DEFAULT: '#7C3AED',
                    dim: '#8a4cfc',
                    container: '#320073',
                },
                accent: '#8ff5ff',
                surface: '#090e17',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Manrope', 'system-ui', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                // can add custom
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
