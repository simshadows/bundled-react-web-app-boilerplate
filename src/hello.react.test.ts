import React from "react";
import renderer from 'react-test-renderer';

import {HelloMessage} from "./hello";

const element = React.createElement;

test("gets 42, adds 1, and returns the expected string", () => {
    const component = renderer.create(
        element(HelloMessage, {num: 42}, null),
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

