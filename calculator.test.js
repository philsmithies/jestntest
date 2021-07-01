const { TestWatcher } = require("jest");
const Calculator = require("./calculator");

let calculator = new Calculator();

test("it can multiply two numbers", () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test("it can sum two numbers", () => {
  expect(calculator.sum(2, 6)).toBe(8);
});

test("it can subtract two numbers", () => {
  expect(calculator.subtract(200, 1)).toBe(199);
});

test("it can divide two numbers", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});
