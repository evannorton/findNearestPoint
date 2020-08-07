import findNearestPoint from "../src/findNearestPoint";

describe("findNearestPoint", (): void => {
    it("test1", (): void => {
        expect(findNearestPoint([
            { x: 0, y: 0, },
            { x: 2, y: 3 },
            { x: -2, y: -3 }
        ], 0, 2)).toBe(1);
    });
    it("test2", (): void => {
        expect(findNearestPoint([
            { x: 0, y: 0, },
            { x: 2, y: 3 },
            { x: -2, y: -3 }
        ], 0, 4)).toBe(2);
    });
    it("test3", (): void => {
        expect(findNearestPoint([
            { x: 0, y: 0, },
            { x: 3, y: 3 },
            { x: -2, y: -3 }
        ], 0, 2)).toBe(1);
    });
});