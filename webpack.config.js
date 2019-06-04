const path = require('path');
const fs = require("fs");
// const https = require("https");
// const webpack = require('webpack');

module.exports = (env = {}) => {
    return {
        entry: "./src/App.tsx",
        output: {
            path: path.resolve(__dirname, "public"),
            publicPath: "/",
            filename: "build/bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    loader: "awesome-typescript-loader"
                }
            ]
        },
        devtool: "eval",
        devServer: {
            https: true,
            // host: "pokyworld.ddns.info",
            // cert: fs.readFileSync('/Volumes/Transcend/Drive/Projects/Active/react-typescript-todo/ssl/pokyworld.ddns.info.crt'),
            // key: fs.readFileSync('/Volumes/Transcend/Drive/Projects/Active/react-typescript-todo/ssl/pokyworld.ddns.info.key'),
            // localhost (127.0.0.1)
            host: "localhost",
            cert: fs.readFileSync('/Volumes/Transcend/Drive/Projects/Active/react-typescript-todo/ssl/localhost.crt'),
            key: fs.readFileSync('/Volumes/Transcend/Drive/Projects/Active/react-typescript-todo/ssl/localhost.key'),
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            compress: true,
            port: 8443
        },
        plugins: []
    }
}