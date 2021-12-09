var fs = require("fs");
var path = require("path");

const commands = fs
    .readFileSync(path.resolve(__dirname, "input.txt"), { encoding: "utf-8"})
    .split("\n")
    // remove empty lines
    .filter((x) => Boolean(x))
    // restructure file
    .map((x) => {
        const [direction, n] = x.split(" ");
        return {
            [direction]: parseInt(n)
        }
    });

let submarine = {
    position: 0,
    depth: 0,
    aim: 0
}

// Part 1
function Part1() {
    submarine.position = 0;
    submarine.depth = 0;

    commands.forEach((command) => {
        if (command.down) {
            submarine.depth += command.down;
        }
        if (command.up) {
            submarine.depth -= command.up;
        }
        if (command.forward) {
            submarine.position += command.forward;
        }
    })

    return submarine.position * submarine.depth;
}

console.log("Part 1: " + Part1());


// Part 2
function Part2() {
    submarine.position = 0;
    submarine.depth = 0;
    commands.forEach((command) => {
        if (command.down) {
            submarine.aim += command.down;
        }
        if (command.up) {
            submarine.aim -= command.up;
        }
        if (command.forward) {
            submarine.position += command.forward;
            submarine.depth += command.forward * submarine.aim; 
        }
    })

    return submarine.position * submarine.depth;
}

console.log("Part 2: " + Part2());

