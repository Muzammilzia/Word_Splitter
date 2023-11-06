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

export const dataTypes = ["int", "float", "str", "char", "void"];
export const accessModifiers = ["public", "private", "protected", "static"];

export const interfaceClass = ["interface"];
export const inheritanceClass = ["::"];

// mdm -> multiply devide mod
export const mdm = ["*", "/", "%"];

// pm -> plus minus
export const pm = ["+", "-"];

export const aop = ["=", "+=", "-="];
export const cop = [">", "<", ">=", "<=", "=="];
export const lop = ["!", "||", "&&"];

export const incdec = ["++", "--"];

export const inOut = ["input", "print"];

export const keyWords = [
  "if",
  "else",
  "elseif",
  "while",
  "for",
  "break",
  "main",
];

export function isString(value) {
  var regex = /([\\])(.*?)\1/;
  return typeof value === "string" && regex.test(value);
}

export function isIntConst(word) {
  // Check if the word is a valid integer constant
  return /^[-+]?\d+$/.test(word);
}

export function isFloatConst(word) {
  // Check if the word is a valid floating-point constant
  return /^[-+]?\d*\.\d+$/.test(word);
}

export function isCharConst(word) {
  // Check if the word is a valid character constant
  return /^'.{1}'$/.test(word);
}

export function isIdentifier(word) {
  return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(word);
}
