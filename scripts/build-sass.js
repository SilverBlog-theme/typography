const sass = require('node-sass');
const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');

let style = sass.renderSync({
    file: path.resolve(__dirname, '../source/scss/style.scss'),
}).css.toString('utf8');
let styleDark = sass.renderSync({
    file: path.resolve(__dirname, '../source/scss/style-dark.scss'),
}).css.toString('utf8');

style = new CleanCSS().minify(style).styles;
styleDark = new CleanCSS().minify(styleDark).styles;

fs.writeFileSync(path.resolve(__dirname, '../static/css/style.css'), style, { encoding: 'utf8' });
fs.writeFileSync(path.resolve(__dirname, '../static/css/style-dark.css'), styleDark, { encoding: 'utf8' });
