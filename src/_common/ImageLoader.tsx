import React from "react";

export class ImageLoader extends React.Component<{src: string}> {
    override render() {
        return <img className="image-loader" src={this.props.src}/>
    }
}
