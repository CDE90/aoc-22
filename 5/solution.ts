// Path: 5/solution.ts

export function parseCrates(input: string) {
    const lines = input.split("\n\n");

    const stackCount = parseInt(lines[0].split("\n").reverse()[0].at(-2)!);
    const crates = lines[0].split("\n").reverse().slice(1);
    const instructions = lines[1]
        .split("\n")
        .map((x) => x.split(" ").map(Number));

    const stacks: string[][] = [];

    for (let i = 1; i <= stackCount; i++) stacks[i] = [];

    crates.forEach((c) => {
        let pos = 0;

        for (let i = 1; i <= stackCount; i++) {
            pos = i == 1 ? pos + 1 : pos + 3;
            if (c.charAt(pos) != " ") stacks[i].push(c.charAt(pos));
            pos++;
        }
    });
    return { stacks, stackCount, instructions };
}

export function part1(input: string): string {
    const { stacks, instructions, stackCount } = parseCrates(input);
    let result = "";

    instructions.forEach((i) => {
        const amount = i[1];
        const from = i[3];
        const to = i[5];

        for (let x = 0; x < amount; x++) stacks[to].push(stacks[from].pop()!);
    });

    for (let i = 1; i <= stackCount; i++)
        if (stacks[i].length > 0) result += stacks[i].at(-1);

    return result;
}

export function part2(input: string): string {
    const { stacks, instructions, stackCount } = parseCrates(input);
    let result = "";

    instructions.forEach((i) => {
        const amount = i[1];
        const from = i[3];
        const to = i[5];
        const b = [];

        for (let x = 0; x < amount; x++) b.push(stacks[from].pop()!);
        b.reverse().forEach((x) => stacks[to].push(x));
    });

    for (let i = 1; i <= stackCount; i++)
        if (stacks[i].length > 0) result += stacks[i].at(-1);

    return result;
}

const input = Deno.readTextFileSync("./5/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
