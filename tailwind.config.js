const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.html',
            './src/**/*.js',
        ],
        options: {
            safelist: [
                /data-theme$/,
            ]
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                orange: colors.orange,
                rose: colors.rose
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: ['dark', 'light'],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    },
}