import React from "react";

import {getMessage} from "./getMessage";
import "./HelloMessage.css";

const element = React.createElement;

export class HelloMessage extends React.Component<{num: number}> {
    render() {
        const num = this.props.num as number;
        return element("span", {className: "message"}, getMessage(num));
    }
}

