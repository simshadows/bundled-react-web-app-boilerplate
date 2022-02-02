import React from "react";
import ReactDOM from "react-dom";

import {getMessage} from "./hello.js";

const element = React.createElement;

class TestComponent extends React.Component {
    render() {
        return element("div",
            {
            id: "hello",
            },
            element("span", null, getMessage(2)),
        );
    }
}

ReactDOM.render(
    element(TestComponent, null),
    document.getElementById("app-mount")
);

