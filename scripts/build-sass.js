const compileSass = require('compile-sass');
const path = require('path');

compileSass.compileSassAndSaveMultiple({
    sassPath: path.resolve(__dirname, '../source/scss/'),
    cssPath: path.resolve(__dirname, '../static/css/'),
    files: ['style.scss', 'style-dark.scss'],
});