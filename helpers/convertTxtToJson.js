const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(
  process.cwd(),
  "data/seeds/data/source/postal-codes/SE.txt"
);
const outputPath = path.resolve(
  process.cwd(),
  "data/seeds/data/output/postalCodes.json"
);

function parseLine(line) {
  const parts = line.split("\t");

  return {
    countryCode: parts[0], // ISO 2-letter code
    postalCode: parts[1], // varchar(20)
    placeName: parts[2], // varchar(180)
    adminName1: parts[3], // state name
    adminCode1: parts[4], // state code
    adminName2: parts[5], // county/province name
    adminCode2: parts[6], // county/province code
    adminName3: parts[7], // community name
    adminCode3: parts[8], // community code
    latitude: parseFloat(parts[9]), // float
    longitude: parseFloat(parts[10]), // float
    accuracy: parseInt(parts[11]), // int: 1, 4, 6
  };
}

function convertTxtToJson() {
  const fileContent = fs.readFileSync(inputPath, "utf-8");
  const lines = fileContent.split("\n").filter((l) => l.trim().length > 0);

  const records = lines.map(parseLine);
  fs.writeFileSync(outputPath, JSON.stringify(records, null, 2), "utf-8");

  console.log(`✅ Converted ${records.length} records to ${outputPath}`);
}

module.exports = convertTxtToJson();
