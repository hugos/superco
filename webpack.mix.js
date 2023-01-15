const { postCss } = require('laravel-mix')
let mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')


// Custom webpack configs
mix.js('src/js/app.js', 'assets')
    .sass('src/scss/app.scss', 'assets')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')]
    });
