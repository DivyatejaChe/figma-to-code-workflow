const { transformFigmaVariables } = require("./transform.js");

const inputData = require("./data/figma.json");
const outputDirectory = "./tokens/brands";

transformFigmaVariables(inputData, outputDirectory);
