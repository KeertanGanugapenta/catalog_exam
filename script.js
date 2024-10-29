const fs = require("fs");

function convertToDecimal(value, base) {
  return parseInt(value, base);
}

function lagrangeInterpolation(points) {
  let constantTerm = 0;
  const k = points.length;

  for (let i = 0; i < k; i++) {
    let xi = points[i].x;
    let yi = points[i].y;

    let Li = 1;
    for (let j = 0; j < k; j++) {
      if (i !== j) {
        Li *= (0 - points[j].x) / (xi - points[j].x);
      }
    }

    constantTerm += yi * Li;
  }

  return Math.round(constantTerm);
}

function parseInput(data) {
  const points = [];
  for (let key in data) {
    if (key !== "keys") {
      const { base, value } = data[key];
      const x = parseInt(key);
      const y = convertToDecimal(value, parseInt(base));
      points.push({ x, y });
    }
  }
  return points;
}

function findConstantTerm(data) {
  const points = parseInput(data);
  const { n, k } = data.keys;

  if (points.length < k) {
    throw new Error("Insufficient points to determine polynomial coefficients");
  }

  const constantTerm = lagrangeInterpolation(points);
  return constantTerm;
}

function calculateFromFile(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${filename}:`, err);
      return;
    }

    const inputData = JSON.parse(data);
    try {
      const constantTerm = findConstantTerm(inputData);
      console.log(`The Secret for ${filename} is: ${constantTerm}`);
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
    }
  });
}

const files = ["testcase1.json", "testcase2.json"];

files.forEach(calculateFromFile);
