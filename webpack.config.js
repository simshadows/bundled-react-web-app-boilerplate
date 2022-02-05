const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// Production values by default
const config = (mode) => ({
    mode: mode,
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
            minify: (mode === "production"),
            template: path.resolve(__dirname, "src", "index.html"),
            favicon: path.resolve(__dirname, "src", "favicon.png"),

            title: "Sim Figures Out Webpack",
            author: "simshadows",
            description: "I have no idea what I'm doing!",
            keywords: "minimal, boilerplate, webpack, react, typescript",
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
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
        ],
    },
    optimization: (mode !== "production") ? undefined : {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 8000,
    },
});

module.exports = (env, argv) => {
    console.log("env:");
    console.log(env);
    console.log();
    console.log("argv:");
    console.log(argv);
    console.log();

    let mode = "production";
    if (["production", "development", "none"].includes(argv.mode)) {
        mode = argv.mode;
    }
    return config(mode);
};

