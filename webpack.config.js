const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Production values by default
const config = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Sim Figures Out Webpack",
            minify: false, // TODO: How do we automatically change this depending on yarn build or yarn start?
            template: "./src/index.html",
        }),
    ],

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

