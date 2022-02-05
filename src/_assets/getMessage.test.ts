import {getMessage} from "./getMessage";

test("gets 7, adds 1, and returns the expected string", () => {
    expect(getMessage(7)).toBe("I have no idea what I'm doing! (Version 8)");
});

test("gets a number, adds 1, and returns the expected string", () => {
    for (let i = 0; i < 100; ++i) {
        expect(getMessage(i)).toBe(`I have no idea what I'm doing! (Version ${i + 1})`);
    }
});

