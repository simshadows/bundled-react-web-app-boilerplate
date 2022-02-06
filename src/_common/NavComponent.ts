import React from "react";

const element = React.createElement;

type NavComponentProps = {
    url: string,
}

export function NavComponent(props: NavComponentProps) {
    const url = props.url as string; // Contrived explicit type check
    return element("span", null,
        element("a", {href: url}, `Go to ${url}`),
    );
}

