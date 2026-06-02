const fs = require("fs");
const pdf = require("pdf-parse");

console.log("PDF IMPORT:", pdf);

const extractTextFromPDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);

  const data = await pdf(dataBuffer);

  return {
    text: data.text,
    pages: data.numpages,
  };
};

module.exports = {
  extractTextFromPDF,
};