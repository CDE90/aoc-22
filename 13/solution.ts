// Path: 13/solution.ts

type Input = number | Input[];

function compare(a: Input, b: Input): number {
    if (typeof a === "number" && typeof b === "number") {
        return a - b;
    } else if (Array.isArray(a) && Array.isArray(b)) {
        const zipped = a.map((e, i) => [e, b[i]]);
        for (const [aa, bb] of zipped) {
            const result = compare(aa, bb);
            if (result !== 0) {
                return result;
            }
        }
        return a.length - b.length;
    } else if (typeof a === "number") {
        return compare([a], b);
    } else if (typeof b === "number") {
        return compare(a, [b]);
    }
    return 0;
}

export function part1(input: string): number {
    const parsed = input.split("\r\n\r\n").map((e) => e.split("\r\n"));

    let total = 0;

    for (let i = 0; i < parsed.length; i++) {
        const [a, b] = parsed[i];
        const x = compare(eval(a), eval(b));
        if (x < 0) {
            total += i + 1;
        }
    }
    return total;
}

export function part2(input: string): number {
    const parsed = input.split("\r\n").map(eval);
    parsed.push([[[6]]], [[[2]]]);

    parsed.sort(compare);

    const two = parsed.findIndex((e) => compare(e, [[2]]) === 0) + 1;
    const six = parsed.findIndex((e) => compare(e, [[6]]) === 0) + 1;
    return two * six;
}

const input = Deno.readTextFileSync("./13/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
