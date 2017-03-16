var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'eval',

    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },

    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: ['babel-loader'],
            exclude: /(node_modules)/
        }, {
            test: /\.json?$/,
            use: ['json-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
        }]
    }
};
