const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        stateInjectedClient: './stateInjectedClient.js',
        client: './client.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
