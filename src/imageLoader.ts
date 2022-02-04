import React from "react";

const element = React.createElement;

export class ImageLoader extends React.Component<{src: string}> {
    render() {
        return element("img", {className: "image-loader", src: this.props.src}, null);
    }
}

