// Path: 6/solution.ts

export function part1(input: string): number {
    let index = 0;

    for (let i = 0; i < input.length; i++) {
        if (
            input[i] === input[i + 1] ||
            input[i] === input[i + 2] ||
            input[i] === input[i + 3] ||
            input[i + 1] === input[i + 2] ||
            input[i + 1] === input[i + 3] ||
            input[i + 2] === input[i + 3]
        ) {
            continue;
        } else {
            index = i + 4;
            break;
        }
    }

    return index;
}

export function part2(input: string): number {
    let index = 0;

    for (let i = 13; i < input.length; i++) {
        if (new Set(input.slice(i - 14, i)).size === 14) {
            index = i;
            break;
        }
    }

    return index;
}

const input = Deno.readTextFileSync("./6/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
