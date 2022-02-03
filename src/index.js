import React from "react";
import ReactDOM from "react-dom";

import {HelloMessage} from "./hello.js";
import "./index.css";

const element = React.createElement;

class TestComponent extends React.Component {
    render() {
        return element("div",
            {
            id: "hello",
            },
            element(HelloMessage, {num: 5}, null),
        );
    }
}

ReactDOM.render(
    element(TestComponent, null),
    document.getElementById("app-mount")
);

