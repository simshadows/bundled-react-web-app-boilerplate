import React from "react";
import {render} from "@testing-library/react";

import {HelloMessage} from "./HelloMessage";

test("gets 42, adds 1, and returns the expected string", () => {
    const {container} = render(<HelloMessage num={42}/>);
    expect(container).toMatchSnapshot();
});
