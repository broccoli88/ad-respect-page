/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        fontFamily: {
            'inter': ["Inter", 'sans-serif'],
            'montserrat': ["Montserrat", 'sans-serif']
        },
        colors: {
            "transparent": "transparent",
            "black": "#000000",
            "white": "#FFFFFF",
            "beige": "#DCC1AB",
            "gray": "#F5F0EC",
            "green": "#1B5B31",
        },
        extend: {},
    },
    plugins: [],
}

