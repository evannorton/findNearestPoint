import foo from "../src/foo";

describe("foo", (): void => {
    it("returns true", (): void => {
        expect(foo()).toBe(true);
    });
});