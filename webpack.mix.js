const mix = require('laravel-mix');

//trazendo o mix tailwindcs laravel
require('mix-tailwindcss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//pasando os aqruivos do diretorio public usando os mix's para funcionamento do css, js, img 

//pasando as img 

mix.copyDirectory('resources/img', 'public/img');


//pasando os css, requisitando os importes do postcss-import


mix.sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [
            require('postcss-import')()
        ]
    }).tailwind();


//pasando os js 

mix.js('resources/js/app.js', 'public/js')
    .extract(['vue', 'axios']);

//criando versão de cokis do css para sempre mander atualizado 

if (mix.inProduction()) {
    mix.version();
}
