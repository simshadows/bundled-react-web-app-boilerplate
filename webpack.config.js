const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// Production values by default
const config = {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        // This is done as a hack to get the Typescript tooling to work since you're not allowed
        // to include the ".ts" extension when importing modules within a Typescript file.
        // I would prefer if I just included file extensions explicitly.
        extensions: [".ts", ".js"],
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
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: { // To be honest, I have no idea what this is doing yet
                    semantic: true,
                    syntactic: true,
                    declaration: true,
                    global: true,
                },
                mode: "write-references",
            },
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
            {
                test: /\.ts$/i,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env"],
                            ["@babel/preset-react"],
                            ["@babel/preset-typescript"],
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

