var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: ['babel-loader'],
            exclude: /(node_modules)/
        }]
    }
};
