import fs from "fs";

// copy .cpp content into a .txt file
export const convertCppToTxt = async (cppFilePath, txtFilePath) => {
  try {
    const data = await fs.promises.readFile(cppFilePath, "utf8");
    await fs.promises.writeFile(txtFilePath, data, "utf8");
    return "Content copied successfully!";
  } catch (err) {
    return `Error: ${err.message}`;
  }
};

// read the content of .cpp as .txt
export const readCppAsTxt = async (cppFilePath) => {
  try {
    const data = await fs.promises.readFile(cppFilePath, "utf8");
    return JSON.stringify(data);
  } catch (err) {
    return `Error: ${err.message}`;
  }
};

export const printAnArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
