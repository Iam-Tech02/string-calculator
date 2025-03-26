import { add } from "./CalculatorLogic";

describe("String Calculator Logic", () => {
    test("returns 0 for empty input", () => {
        expect(add("")).toBe(0);
    });

    test("returns the sum of one number", () => {
        expect(add("5")).toBe(5);
    });

    test("returns the sum of two numbers", () => {
        expect(add("3,7")).toBe(10);
    });

    test("returns 0 for more than two numbers", () => {
        expect(add("1,2,3")).toBe(0);
    });

    test("handles invalid numbers gracefully", () => {
        expect(add("3,abc")).toBe(3);
    });

    test("ignores leading and trailing spaces", () => {
        expect(add(" 2 , 3 ")).toBe(5);
    });

    test("returns 0 if all inputs are invalid", () => {
        expect(add("abc,xyz")).toBe(0);
    });
});
