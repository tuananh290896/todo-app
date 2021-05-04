const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

  mix.webpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, 'resources/js/components'),
        "@styles": path.resolve(__dirname, 'resources/js/styles'),
        "@layouts": path.resolve(__dirname, 'resources/js/layouts'),
        "@constants": path.resolve(__dirname, 'resources/js/constants'),
        "@repositories": path.resolve(__dirname, 'resources/js/repository'),
        "@utils": path.resolve(__dirname, 'resources/js/utils'),
        "@helpers": path.resolve(__dirname, 'resources/js/utils/helper'),
      }
    }
  });
 
  mix.js('resources/js/app.js', 'public/js').vue({ version: 2 })
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
