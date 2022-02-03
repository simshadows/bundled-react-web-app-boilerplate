import React from "react";

import {getMessage} from "./getMessage.ts";
import "./hello.css";

const element = React.createElement;

export class HelloMessage extends React.Component {
    render() {
        //const num = this.props.num as number;
        const num = "lmao"; // This should be caught by type checking... but it doesn't.
        return element("span", {className: "message"}, getMessage(num));
    }
}

