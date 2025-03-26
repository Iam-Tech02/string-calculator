import { add } from "./CalculatorLogic";

describe("String Calculator Logic", () => {

  test("returns 0 for empty input", () => {
    expect(add("")).toBe(0);
  });

  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("supports multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("supports multi-character custom delimiters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test("supports multiple multi-character delimiters", () => {
    expect(add("//[**][%%]\n2**3%%4")).toBe(9);
  });

  test("ignores numbers larger than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001,999")).toBe(1999);
  });

  test("throws an exception for negative numbers", () => {
    expect(() => add("2,-3,4")).toThrow("Negatives not allowed: -3");
  });

  test("throws an exception for multiple negatives", () => {
    expect(() => add("1,-2,-3,4")).toThrow("Negatives not allowed: -2, -3");
  });

  test("handles multiple complex delimiters and ignores > 1000", () => {
    expect(add("//[***][%%%][###]\n2***3%%%4###1001")).toBe(9);
  });

  test("ignores leading and trailing spaces", () => {
    expect(add(" 2 , 3 \n 4 ")).toBe(9);
  });

});
