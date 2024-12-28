import React from "react";
import {createRoot} from "react-dom/client";

import {HelloMessage} from "../_common/HelloMessage";
import {ImageLoader} from "../_common/ImageLoader";
import {NavComponent} from "../_common/NavComponent";
import "./index.css";

import placeholderRaster from "./placeholder-raster.png";
import placeholderVector from "./placeholder-vector.svg";

class TestComponent extends React.Component {
    override render() {
        return <div id="hello">
            <HelloMessage num={0}/>
            <br/>
            <NavComponent url="./innerpage/"/>
            <br/>
            <br/>
            <ImageLoader src={placeholderRaster}/>
            <br/>
            <br/>
            <ImageLoader src={placeholderVector}/>
        </div>;
    }
}

const root_element = document.getElementById("app-mount");
if (!root_element) throw new Error();
const root = createRoot(root_element);
root.render(<TestComponent/>);
