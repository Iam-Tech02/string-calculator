import { add } from "./CalculatorLogic";

describe("String Calculator Logic", () => {

  test("returns 0 for empty input", () => {
    expect(add("")).toBe(0);
  });

  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter with semicolon", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  test("supports custom delimiter with pipe", () => {
    expect(add("//|\n4|5|6")).toBe(15);
  });

  test("supports multi-character custom delimiters", () => {
    expect(add("//***\n1***2***3")).toBe(6);  // Fixed test case
  });

  test("supports custom delimiters with special characters", () => {
    expect(add("//$$$\n1$$$2$$$3")).toBe(6);
    expect(add("//+++\n5+++10+++15")).toBe(30);
  });

  test("throws an exception for a single negative number", () => {
    expect(() => add("2,-3,4")).toThrow("Negatives not allowed: -3");
  });

  test("throws an exception for multiple negative numbers", () => {
    expect(() => add("1,-2,-3,4")).toThrow("Negatives not allowed: -2, -3");
  });

  test("returns 0 when all values are invalid", () => {
    expect(add("abc,xyz")).toBe(0);
  });

  test("ignores leading and trailing spaces", () => {
    expect(add(" 2 , 3 \n 4 ")).toBe(9);
  });
});
