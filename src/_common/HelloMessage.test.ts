import React from "react";
import {render} from "@testing-library/react";

import {HelloMessage} from "./HelloMessage";

const element = React.createElement;

test("gets 42, adds 1, and returns the expected string", () => {
    const {container} = render(
        element(HelloMessage, {num: 42}, null),
    );
    expect(container).toMatchSnapshot();
});
