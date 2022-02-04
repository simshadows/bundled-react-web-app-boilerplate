import React from "react";
import ReactDOM from "react-dom";

import {HelloMessage} from "./hello";
import {ImageLoader} from "./imageLoader";
import "./index.css";

import placeholderRaster from "./placeholder-raster.png";
import placeholderVector from "./placeholder-vector.svg";

const element = React.createElement;

class TestComponent extends React.Component {
    render() {
        return element("div", { id: "hello" },
            element(HelloMessage, {num: 8}, null),
            element("br", null, null),
            element("br", null, null),
            element(ImageLoader, {src: placeholderRaster}, null),
            element("br", null, null),
            element("br", null, null),
            element(ImageLoader, {src: placeholderVector}, null),
        );
    }
}

ReactDOM.render(
    element(TestComponent, null),
    document.getElementById("app-mount")
);

