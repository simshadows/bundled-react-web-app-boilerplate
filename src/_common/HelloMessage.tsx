import React from "react";

import {getMessage} from "./getMessage";
import "./HelloMessage.css";

export class HelloMessage extends React.Component<{num: number}> {
    render() {
        const num = this.props.num as number;
        return <span className="message">{getMessage(num)}</span>;
    }
}

