import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/js/**/*.js', // Include JS files if used
        './resources/js/**/*.tsx', // Include TSX files if used
        './resources/js/**/*.ts', // Include TS files if used
        flowbite.content(),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                greenStar: '#00b67a',
                primary:'#FE753E',
                secondary: '#5459E8',
            },
        },
    },

    plugins: [forms, flowbite.plugin()],
};
