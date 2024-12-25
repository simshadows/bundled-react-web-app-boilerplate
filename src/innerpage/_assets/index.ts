import React from "react";
import {createRoot} from "react-dom/client";

import {HelloMessage} from "../../_common/HelloMessage";
import {ImageLoader} from "../../_common/ImageLoader";
import {NavComponent} from "../../_common/NavComponent";
import "./index.css";

import placeholderRasterGreen from "./placeholder-raster-green.png";

const element = React.createElement;

class TestComponent extends React.Component {
    render() {
        return element("div", { id: "hello" },
            element(HelloMessage, {num: 13}, null),
            element("br", null, null),
            element(NavComponent, {url: "../"}, null),
            element("br", null, null),
            element("br", null, null),
            element(ImageLoader, {src: placeholderRasterGreen}, null),
        );
    }
}

const root = createRoot(document.getElementById("app-mount"));
root.render(element(TestComponent, null));
