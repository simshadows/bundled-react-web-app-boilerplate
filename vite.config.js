import {resolve} from "path";

import {defineConfig} from "vite";
import {render} from "ejs";

const constants = {
    canonical: "PLACEHOLDER",
    title: "Sim Figures Out Webpack",
    author: "simshadows",
    description: "I have no idea what I'm doing!",
    keywords: "minimal, boilerplate, webpack, react, typescript",
    embedImage: "PLACEHOLDER",
};

const indexEjsPlugin = {
    name: "index-ejs",
    transformIndexHtml: {
        order: "pre",
        handler: (html) => {
            return render(html, {constants});
        },
    },
};

export default defineConfig({
    //appType: "mpa",
    root: "./src",
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                root: resolve(__dirname, "src/index.html"),
                innerpage: resolve(__dirname, "src/innerpage/index.html"),
            },
        },
    },
    plugins: [indexEjsPlugin],
    clearScreen: false,
});
