import React from "react";
import {createRoot} from "react-dom/client";

import {HelloMessage} from "../../_common/HelloMessage";
import {ImageLoader} from "../../_common/ImageLoader";
import {NavComponent} from "../../_common/NavComponent";
import "./index.css";

import placeholderRasterGreen from "./placeholder-raster-green.png";

class TestComponent extends React.Component {
    render() {
        return <div id="hello">
            <HelloMessage num={1}/>
            <br/>
            <NavComponent url="../"/>
            <br/>
            <br/>
            <ImageLoader src={placeholderRasterGreen}/>
        </div>;
    }
}

const root = createRoot(document.getElementById("app-mount"));
root.render(<TestComponent/>);
