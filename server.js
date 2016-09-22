/* eslint-disable no-var, strict */
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, 'src'),
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(5000, 'localhost', function(err) {
    if (err) { console.log(err); }
    console.log('Listening at localhost:5000');
});
