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

    test("returns the sum of multiple numbers", () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });

    test("returns 0 for invalid input", () => {
        expect(add("abc")).toBe(0);
    });

    test("handles mixed valid and invalid inputs", () => {
        expect(add("2,abc,3")).toBe(5);
    });

    test("ignores leading and trailing spaces", () => {
        expect(add(" 2 , 3 , 4 ")).toBe(9);
    });

    test("handles all invalid numbers gracefully", () => {
        expect(add("abc,xyz")).toBe(0);
    });

    test("handles negative and zero values", () => {
        expect(add("5,-2,0,3")).toBe(6);  // -2 and 0 are properly handled
    });
});
