
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#050505',
                primary: {
                    DEFAULT: '#646cff', // This is default, but user config will override inline styles
                }
            },
            fontFamily: {
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                // can add custom
            },
            extend: {
                backgroundImage: {
                    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                }
            }
        },
    },
    plugins: [],
}
