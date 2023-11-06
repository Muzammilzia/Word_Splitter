import { readFileAsTxt } from "./file_to_txt.js";
import { lexicalAnalyzer } from "./lexicalAnalyzer.js";
import { wordSplitter } from "./wordSplitter.js";

const filePath = "inputCode2.txt";
const codeString = await readFileAsTxt(filePath);

lexicalAnalyzer(wordSplitter(codeString));
