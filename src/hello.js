import React from "react";

import {getMessage} from "./getMessage.js";

const element = React.createElement;

export class HelloMessage extends React.Component {
    render() {
        return element("span", {className: "message"}, getMessage(this.props.num));
    }
}

