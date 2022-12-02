// Path: 2/solution.ts
//A for Rock, B for Paper, and C for Scissors
//X for Rock, Y for Paper, and Z for Scissors

export function part1(input: string): number {
    const inputList = input.split("\r\n");

    let score = 0;

    for (let i = 0; i < inputList.length; i++) {
        const line = inputList[i];
        if (line.startsWith("A")) {
            if (line.endsWith("X")) {
                score += 3;
                score += 1;
            } else if (line.endsWith("Y")) {
                score += 6;
                score += 2;
            } else if (line.endsWith("Z")) {
                score += 3;
            }
        } else if (line.startsWith("B")) {
            if (line.endsWith("X")) {
                score += 1;
            } else if (line.endsWith("Y")) {
                score += 3;
                score += 2;
            } else if (line.endsWith("Z")) {
                score += 6;
                score += 3;
            }
        } else if (line.startsWith("C")) {
            if (line.endsWith("X")) {
                score += 6;
                score += 1;
            } else if (line.endsWith("Y")) {
                score += 2;
            } else if (line.endsWith("Z")) {
                score += 3;
                score += 3;
            }
        }
    }
    return score;
}

//A for Rock, B for Paper, and C for Scissors
//X lose, Y draw, and Z win.

export function part2(input: string): number {
    const inputList = input.split("\r\n");

    let score = 0;

    for (let i = 0; i < inputList.length; i++) {
        const line = inputList[i];
        if (line.startsWith("A")) {
            if (line.endsWith("X")) {
                score += 0;
                score += 3;
            } else if (line.endsWith("Y")) {
                score += 3;
                score += 1;
            } else if (line.endsWith("Z")) {
                score += 6;
                score += 2;
            }
        } else if (line.startsWith("B")) {
            if (line.endsWith("X")) {
                score += 0;
                score += 1;
            } else if (line.endsWith("Y")) {
                score += 3;
                score += 2;
            } else if (line.endsWith("Z")) {
                score += 6;
                score += 3;
            }
        } else if (line.startsWith("C")) {
            if (line.endsWith("X")) {
                score += 0;
                score += 2;
            } else if (line.endsWith("Y")) {
                score += 3;
                score += 3;
            } else if (line.endsWith("Z")) {
                score += 6;
                score += 1;
            }
        }
    }
    return score;
}

const input = Deno.readTextFileSync("./2/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
