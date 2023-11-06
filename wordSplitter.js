import { printAnArray } from "./file_to_txt.js";
import {
  inheritanceClass,
  interfaceClass,
  operators,
  punctuators,
  space,
} from "./constants.js";

export const wordSplitter = (codeString) => {
  // lexiam -> word
  let lexiam = "";
  const wordArray = [];
  for (let i = 1; i < codeString.length - 1; i++) {
    // check for strings, if strings starts with " add everything till " into lexiam and then push, same for ''
    if (codeString[i] === '"') {
      i++;
      while (codeString[i] && codeString[i] !== '"') {
        lexiam += codeString[i];
        i++;
      }
      wordArray.push(`${lexiam}`);
      lexiam = "";
    } else if (codeString[i] === "'") {
      i++;
      while (codeString[i] && codeString[i] !== "'") {
        lexiam += codeString[i];
        i++;
      }
      wordArray.push(`${lexiam}`);
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
      wordArray.push("\\n");
      i += 3;
    } else if (codeString[i] === "~") {
      i++;
      while (codeString[i] && codeString[i] !== "~") {
        i++;
      }
    } else if (
      codeString[i] === ";" ||
      codeString[i] === "," ||
      codeString[i] === "."
    ) {
      if (lexiam !== " " && lexiam !== "") {
        wordArray.push(lexiam);
      }
      wordArray.push(codeString[i]);
      lexiam = "";
    } else if (interfaceClass.includes(codeString[i])) {
      if (lexiam !== " " && lexiam !== "") {
        wordArray.push(lexiam);
      }
      wordArray.push(codeString[i]);
      lexiam = "";
    } else if (inheritanceClass.includes(codeString[i] + codeString[i + 1])) {
      if (lexiam !== " " && lexiam !== "") {
        wordArray.push(lexiam);
      }
      wordArray.push(codeString[i] + codeString[i + 1]);
      lexiam = "";
      i++;
    }

    // check for punctuators, if found add previous lexiam into wordarray and also the current punctuator
    else if (punctuators.includes(codeString[i])) {
      if (lexiam !== " " && lexiam !== "") {
        wordArray.push(lexiam);
      }
      wordArray.push(codeString[i]);
      lexiam = "";
    }

    // check for line breaks
    else if (codeString.slice(i, i + 4) === "\\r\\n") {
      if (lexiam !== " " && lexiam !== "") {
        wordArray.push(lexiam);
      }
      wordArray.push("\\n");
      lexiam = "";
      i += 3;
    }

    // check for spaces
    else if (space.includes(codeString[i])) {
      if (lexiam !== "" && lexiam !== "") {
        wordArray.push(lexiam);
      }
      lexiam = "";
    }

    // check for two character operators
    else if (operators.includes(codeString[i] + codeString[i + 1])) {
      if (lexiam !== " " && lexiam !== "") {
        wordArray.push(lexiam);
      }
      wordArray.push(codeString[i] + codeString[i + 1]);
      lexiam = "";
      i++;
    }

    // check for single character operators
    else if (operators.includes(codeString[i])) {
      if (lexiam !== " " && lexiam !== "") {
        wordArray.push(lexiam);
      }
      wordArray.push(codeString[i]);
      lexiam = "";
    }

    // else add current character into lexiam
    else {
      lexiam += codeString[i];
    }
  }
  console.log(
    "----------------------------Word Splitter Output------------------------------------------------------"
  );
  console.log(wordArray);
  console.log(
    "----------------------------Word Splitter Output------------------------------------------------------"
  );
  return wordArray;
};

// printAnArray(wordSplitter(codeString));
// wordSplitter(codeString);
