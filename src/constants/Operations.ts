enum Operators {
  plus = "+",
  minus = "-",
  multiple = "*",
  divide = "/",
}

type Operations = Record<Operators, (a: number, b: number) => number>;

export const operations: Operations = {
  [Operators.plus]: (a, b) => a + b,
  [Operators.minus]: (a, b) => a - b,
  [Operators.multiple]: (a, b) => a * b,
  [Operators.divide]: (a, b) => a / b,
};
