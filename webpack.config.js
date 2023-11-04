/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: prod ? "production" : "development",
    entry: "./src/scripts/index.tsx",
    output: {
        path: __dirname + "/dist/",
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

const files = ["index.html"];
for (let index in files) {
    module.exports.plugins.push(
        new HtmlWebpackPlugin({
            template: files[index],
        })
    )
}