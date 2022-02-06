const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

function htmlWebpackPluginCommon(configArgs, mergeIn) {
    // Merge mergeIn with some common options
    return Object.assign({
        filename: "index.html",
        template: path.resolve(__dirname, "src", "index.html"),
        chunks: ["index"],

        minify: (configArgs.mode === "production"),

        title: "Sim Figures Out Webpack",
        author: "simshadows",
        description: "I have no idea what I'm doing!",
        keywords: "minimal, boilerplate, webpack, react, typescript",
        favicon: path.resolve(__dirname, "src", "favicon.png"),
    }, mergeIn);
}

const config = (configArgs) => ({
    mode: configArgs.mode,
    entry: {
        "index": path.resolve(__dirname, "src", "_assets", "index.ts"),
        "innerpage/index": path.resolve(__dirname, "src", "innerpage", "_assets", "index.ts"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name]-[hash][ext]",
        clean: true,
    },
    resolve: {
        // This is done as a hack to get the Typescript tooling to work since you're not allowed
        // to include the ".ts" extension when importing modules within a Typescript file.
        // I would prefer if I just included file extensions explicitly.
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin(htmlWebpackPluginCommon(configArgs, {})),
        new HtmlWebpackPlugin(htmlWebpackPluginCommon(configArgs, {
            filename: "innerpage/index.html",
            template: path.resolve(__dirname, "src", "innerpage", "index.html"),
            chunks: ["innerpage/index"],

            title: "Inner Page",
            description: "I am an inner page!",
        })),
        new MiniCssExtractPlugin({
            filename: "[name].css",
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
    optimization: {
        minimize: (configArgs.mode === "production"),
        minimizer: [
            new TerserPlugin(),
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

    const configArgs = {
        mode: "production",
    };
    
    if (["production", "development", "none"].includes(argv.mode)) {
        configArgs.mode = argv.mode;
    }

    return config(configArgs);
};

