const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');

imagemin(['src/img/*.png'], 'dist/img', {use: [imageminPngquant()]}).then(() => {
	console.log('PNG images optimized');
});

imagemin(['src/img/*.jpg'], 'dist/img', {use: [imageminJpegtran()]}).then(() => {
    console.log('JPG images optimized');
});