// Path: 2022/1/solution.ts

export function part1(input: string): number {
    const inputArray = input.split("\n");
    const elves = [];
    let total = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray.at(i) !== "") {
            total += parseInt(inputArray.at(i) ?? "0");
        } else {
            elves.push(total);
            total = 0;
        }
    }

    return Math.max(...elves);
}

export function part2(input: string): number {
    const inputArray = input.split("\n");
    const elves = [];
    let total = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray.at(i) !== "") {
            total += parseInt(inputArray.at(i) ?? "0");
        } else {
            elves.push(total);
            total = 0;
        }
    }

    elves.sort((a, b) => a - b);

    return (elves.at(-1) ?? 0) + (elves.at(-2) ?? 0) + (elves.at(-3) ?? 0);
}

const input = Deno.readTextFileSync("./1/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
