import React from "react";
import ReactDOM from "react-dom";

import {HelloMessage} from "./hello.js";

const element = React.createElement;

class TestComponent extends React.Component {
    render() {
        return element("div",
            {
            id: "hello",
            },
            element(HelloMessage, {num: 4}, null),
        );
    }
}

ReactDOM.render(
    element(TestComponent, null),
    document.getElementById("app-mount")
);

