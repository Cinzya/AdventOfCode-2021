var fs = require("fs");
var path = require("path");

const binary = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), { encoding: "utf-8"})
    .split("\n")
    // remove empty lines
    .filter((x) => Boolean(x));

const binaryLength = binary[0].length;

const zeros = Array(binaryLength).fill(0);
const ones = Array(binaryLength).fill(0);

for (const line of binary) {
    // split the string into an array of characters
    const bits = [... line];

    bits.forEach((bit, index) => {
        if (bit === "0") zeros[index]++;
        else ones[index]++;
        
    })
}

let gammaBinary = "";
let epsilonBinary = "";

for (let index = 0; index < binaryLength; index++) {
    if (zeros[index] < ones[index]) {
        gammaBinary += "1";
        epsilonBinary += "0"
    }
    else {
        gammaBinary += "0"
        epsilonBinary += "1"
    }
}
let gammaRate = parseInt(gammaBinary, 2);
let epsilonRate = parseInt(epsilonBinary, 2);
const powerConsumption = gammaRate * epsilonRate;

console.log(powerConsumption);

const length2 = binary.length;

let oxigenGeneratorRating = binary;
let co2ScrubberRating = binary;

for (let index = 0; index < length2; index++) {
    if (zeros[index] < ones[index]) {
        if (oxigenGeneratorRating.length > 1) 
        oxigenGeneratorRating = oxigenGeneratorRating.filter(line => line.charAt(index) === "1");
        if (co2ScrubberRating.length > 1)
        co2ScrubberRating = co2ScrubberRating.filter(line => line.charAt(index) === "0");
    }
}

console.log(oxigenGeneratorRating, co2ScrubberRating);