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
    // console.log(codeString.slice(i, i + 4));
    // check for strings
    // console.log(codeString[i] === '"');
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

    // check for comments
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

    // check for punctuators
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

    //
    else {
      lexiam += codeString[i];
    }
  }
  return wordArray;
};

printAnArray(wordSplitter(codeString));
// wordSplitter(codeString);
