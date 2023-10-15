import { convertCppToTxt, printAnArray, readCppAsTxt } from "./cpp_to_txt.js";
import { punctuators, space } from "./seperators.js";

const filePath = "inputcode.txt";
const codeString = await readCppAsTxt(filePath);
// console.log(codeString);

const wordSplitter = (codeString) => {
  // lexiam -> word
  let lexiam = "";
  const wordArray = [];
  for (let i = 1; i < codeString.length; i++) {
    // check for strings, if strings starts with " add everything till " into lexiam and then push, same for ''
    if (codeString[i] === '"') {
      i++;
      while (codeString[i] && codeString[i] !== '"') {
        lexiam += codeString[i];
        i++;
      }
      wordArray.push(lexiam);
      lexiam = "";
    } else if (codeString[i] === "'") {
      i++;
      while (codeString[i] && codeString[i] !== "'") {
        lexiam += codeString[i];
        i++;
      }
      wordArray.push(lexiam);
      lexiam = "";
    }

    // check for single line comments, if # is found skip all chars till \r\n CR-LF(Carriage Return - Line Feed) (end of line)
    // check for multi line comments, if ~ is found skip all chars till ~
    else if (codeString[i] === "#") {
      while (
        codeString.slice(i, i + 4) &&
        codeString.slice(i, i + 4) !== "\\r\\n"
      ) {
        i++;
      }
      i += 3;
    } else if (codeString[i] === "~") {
      i++;
      while (codeString[i] && codeString[i] !== "~") {
        i++;
      }
    }

    // check for punctuators, if found add previous lexiam into wordarray and also the current punctuator
    else if (punctuators.includes(codeString[i])) {
      if (lexiam !== " ") {
        wordArray.push(lexiam);
      }
      wordArray.push(codeString[i]);
      lexiam = "";
    }

    // check for line breaks
    else if (codeString.slice(i, i + 4) === "\\r\\n") {
      wordArray.push(lexiam);
      lexiam = "";
      i += 3;
    }

    // check for spaces
    else if (space.includes(codeString[i])) {
      if (lexiam !== "") {
        wordArray.push(lexiam);
      }
      lexiam = "";
    }

    // else add current character into lexiam
    else {
      lexiam += codeString[i];
    }
  }
  return wordArray;
};

printAnArray(wordSplitter(codeString));
// wordSplitter(codeString);
