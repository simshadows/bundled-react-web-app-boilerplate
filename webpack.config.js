const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Production values by default
const config = {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Sim Figures Out Webpack",
            minify: false, // TODO: How do we automatically change this depending on yarn build or yarn start?
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "index.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env"],
                            ["@babel/preset-react"],
                        ],
                    },
                },
            },
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 8000,
    },
};

module.exports = (env, argv) => {
    console.log("env:");
    console.log(env);
    console.log();
    console.log("argv:");
    console.log(argv);
    console.log();

    if (["production", "development", "none"].includes(argv.mode)) {
        config.mode = argv.mode;
    }
    return config;
};

