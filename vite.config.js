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
    root: "./src",
    build: {
        outDir: "dist",
    },
    plugins: [indexEjsPlugin],
});
