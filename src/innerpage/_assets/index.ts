import React from "react";
import ReactDOM from "react-dom";

import {ImageLoader} from "../../_common/imageLoader";
//import "./index.css";

import placeholderRasterGreen from "./placeholder-raster-green.png";

const element = React.createElement;

class TestComponent extends React.Component {
    render() {
        return element("div", { id: "hello" },
            element(ImageLoader, {src: placeholderRasterGreen}, null),
        );
    }
}

ReactDOM.render(
    element(TestComponent, null),
    document.getElementById("app-mount")
);

