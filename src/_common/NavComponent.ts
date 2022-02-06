import React from "react";

const element = React.createElement;

type NavComponentProps = {
    url: number, // TODO: Trying to force a type error. Change back to string when it's fixed!
}

export function NavComponent(props: NavComponentProps) {
    const url = props.url as string; // Contrived explicit type check
    return element("span", null,
        element("a", {href: url}, `Go to ${url}`),
    );
}

