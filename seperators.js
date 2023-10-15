export const space = [" "];

export const punctuators = ["(", ")", "{", "}", "[", "]"];

export const operators = [
  "+",
  "-",
  "*",
  "/",
  ">",
  "<",
  "=",
  "==",
  "++",
  "--",
  ">=",
  "<=",
  "+=",
  "-=",
  "*=",
  "/=",
];

export const seperators = [...space, ...punctuators, ...operators];

export const comments = ["#", "~"];
// comment[0] -> single line comment
// comment[1] -> multi line comment
