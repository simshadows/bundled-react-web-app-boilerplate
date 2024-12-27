import React from "react";

type NavComponentProps = {
    url: string,
}

export function NavComponent(props: NavComponentProps) {
    const url = props.url as string; // Contrived explicit type check
    return <span><a href={url}>{`Go to ${url}`}</a></span>
}

