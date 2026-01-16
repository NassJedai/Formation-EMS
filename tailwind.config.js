/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: '#00f0ff',
            },
            fontFamily: {
                display: ['Orbitron', 'sans-serif'],
                body: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
