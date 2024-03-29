const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        stateInjectedClient: './stateInjectedClient.js',
        statelessClient: './client.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 3000
    }
};
