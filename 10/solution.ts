// Path: 10/solution.ts

export function part1(input: string): number {
    const lines = input.split("\r\n");
    let x = 1;
    let cycle = 1;
    let total = 0;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i] === "noop") {
            cycle++;
        } else {
            const num = parseInt(lines[i].split(" ")[1]);
            cycle++;
            if (cycle % 20 === 0 && cycle % 40 !== 0) {
                total += x * cycle;
            }
            x += num;
            cycle++;
        }
        if (cycle % 20 === 0 && cycle % 40 !== 0) {
            total += x * cycle;
        }
    }
    return total;
}

export function part2(input: string): string {
    const lines = input.split("\r\n");
    let x = 1;
    let cycle = 1;
    const grid = new Array(6).fill(0).map(() => new Array(40).fill("."));
    let grid_row = 0;

    for (let i = 0; i < lines.length; i++) {
        if (x - 1 === cycle - 1 || x === cycle - 1 || x + 1 === cycle - 1) {
            grid[grid_row][cycle - 1] = "#";
        }
        if (lines[i] === "noop") {
            cycle++;
        } else {
            const num = parseInt(lines[i].split(" ")[1]);
            cycle++;
            if (cycle % 40 === 0) {
                grid_row++;
                cycle = 0;
            }
            if (x - 1 === cycle - 1 || x === cycle - 1 || x + 1 === cycle - 1) {
                grid[grid_row][cycle - 1] = "#";
            }
            x += num;
            cycle++;
        }
        if (cycle % 40 === 0) {
            grid_row++;
            cycle = 0;
        }
    }
    return "\n" + grid.map((row) => row.join("")).join("\r\n");
}

const input = Deno.readTextFileSync("./10/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
