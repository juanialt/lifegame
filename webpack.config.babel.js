const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        publicPath: path.join(__dirname, 'dist'),
        // contentBase: path.resolve(__dirname, 'dist'), // invalid
        compress: true,
        port: 9000
        // progress: true  // invalid
    },

    devtool: 'eval',

    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },

    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js[x]?$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }, {
            test: /\.js[x]?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
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
