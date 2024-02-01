/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Establishes the module exports for Webpack to place into ./dist.
module.exports = {
    mode: prod ? "production" : "development",
    entry: "./src/scripts/index.tsx",
    output: {
        path: __dirname + "/dist/",
    },
    resolve: {
        alias: {
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",
            "react/jsx-runtime": "preact/jsx-runtime"
        },
    },    
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
                },
                use: "ts-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    devtool: prod ? undefined : "source-map",
    plugins: [
        new MiniCssExtractPlugin(),
    ],
};

// Add more index files here.
const files = ["index.html"];
for (let index in files) {
    module.exports.plugins.push(
        new HtmlWebpackPlugin({
            template: files[index],
        })
    )
}