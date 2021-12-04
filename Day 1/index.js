const input = require("./input.json");

let x = 0;

input.forEach((current, index, measurements) => {
    let previous = measurements[index - 1];
    if(previous < current) {
        x++;
    }
})

console.log("Part 1: " + x);

let y = 0;
let measurements = input;
for (let i = 3; i < input.length; i++) {
    let current = measurements[i] + measurements[i - 1] + measurements[i - 2];
    let previous = measurements[i - 1] + measurements[i - 2] + measurements[i - 3];

    if(previous < current) {
        y++;
    }
}

console.log("Part 2: " + y);



