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

    test("handles new lines as delimiters", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test("handles only new lines between numbers", () => {
        expect(add("2\n4\n6")).toBe(12);
    });

    test("handles mixed delimiters (commas and new lines)", () => {
        expect(add("1\n2,3,4\n5")).toBe(15);
    });

    test("ignores leading and trailing spaces", () => {
        expect(add(" 2 , 3 \n 4 ")).toBe(9);
    });

    test("returns 0 for invalid input", () => {
        expect(add("abc")).toBe(0);
    });

    test("handles mixed valid and invalid inputs", () => {
        expect(add("2,abc,3")).toBe(5);
    });

    test("handles negative and zero values", () => {
        expect(add("5,-2,0,3")).toBe(6);  // Negative and zero handled correctly
    });

    test("returns 0 for all invalid inputs", () => {
        expect(add("abc,xyz")).toBe(0);
    });
});
