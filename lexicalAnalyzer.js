import {
  accessModifiers,
  aop,
  cop,
  dataTypes,
  inOut,
  incdec,
  inheritanceClass,
  interfaceClass,
  isCharConst,
  isFloatConst,
  isIdentifier,
  isIntConst,
  isString,
  keyWords,
  lop,
  mdm,
  pm,
  punctuators,
} from "./constants.js";

export const lexicalAnalyzer = (wordsArray) => {
  const tokenArray = [];
  let lineNumber = 1;
  for (let i = 0; i < wordsArray.length; i++) {
    const token = {};
    if (wordsArray[i] === "\\n") {
      lineNumber++;
    } else {
      if (dataTypes.includes(wordsArray[i])) {
        token.classPart = "DataType";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (accessModifiers.includes(wordsArray[i])) {
        token.classPart = "AccessModifier";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (mdm.includes(wordsArray[i])) {
        token.classPart = "mdm";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (pm.includes(wordsArray[i])) {
        token.classPart = "pm";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (aop.includes(wordsArray[i])) {
        token.classPart = "aop";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (cop.includes(wordsArray[i])) {
        token.classPart = "cop";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (lop.includes(wordsArray[i])) {
        token.classPart = wordsArray[i];
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (incdec.includes(wordsArray[i])) {
        token.classPart = wordsArray[i];
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (inOut.includes(wordsArray[i])) {
        token.classPart = "InputOutput";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (punctuators.includes(wordsArray[i])) {
        token.classPart = wordsArray[i];
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (isIntConst(wordsArray[i])) {
        token.classPart = "int";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (isFloatConst(wordsArray[i])) {
        token.classPart = "float";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (isCharConst(wordsArray[i])) {
        token.classPart = "char";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (
        wordsArray[i] === ";" ||
        wordsArray[i] === "," ||
        wordsArray[i] === "."
      ) {
        token.classPart = wordsArray[i];
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (isString(wordsArray[i])) {
        token.classPart = "string";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (interfaceClass.includes(wordsArray[i])) {
        token.classPart = wordsArray[i];
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (inheritanceClass.includes(wordsArray[i])) {
        token.classPart = wordsArray[i];
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (keyWords.includes(wordsArray[i])) {
        token.classPart = wordsArray[i];
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      } else if (isIdentifier(wordsArray[i])) {
        token.classPart = "identifier";
        token.valuePart = wordsArray[i];
        token.lineNumber = lineNumber;
      }
      tokenArray.push(token);
    }
  }
  console.log(
    "----------------------------Lexical Analyzer Output------------------------------------------------------"
  );
  console.log(tokenArray);
  console.log(
    "----------------------------Lexical Analyzer Output------------------------------------------------------"
  );
  return tokenArray;
};
