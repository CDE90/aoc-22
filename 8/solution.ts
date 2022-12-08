// Path: 8/solution.ts

export function part1(input: string): number {
    const inputArray = input.split("\r\n").map((line) =>
        line
            .trim()
            .split("")
            .map((c) => parseInt(c))
    );
    let visible =
        (inputArray.length - 2) * 2 + (inputArray[0].length - 2) * 2 + 4;

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray[i].length; j++) {
            if (
                i === 0 ||
                j === 0 ||
                i === inputArray.length - 1 ||
                j === inputArray[i].length - 1
            ) {
                continue;
            }
            const right = inputArray[i].slice(j + 1, inputArray[i].length);
            const left = inputArray[i].slice(0, j);
            const top = inputArray.slice(0, i).map((row) => row[j]);
            const bottom = inputArray
                .slice(i + 1, inputArray.length)
                .map((row) => row[j]);
            if (
                right.every((c) => c < inputArray[i][j]) ||
                left.every((c) => c < inputArray[i][j]) ||
                top.every((c) => c < inputArray[i][j]) ||
                bottom.every((c) => c < inputArray[i][j])
            ) {
                visible++;
            }
        }
    }
    return visible;
}

export function part2(input: string): number {
    const inputArray = input.split("\r\n").map((line) =>
        line
            .trim()
            .split("")
            .map((c) => parseInt(c))
    );
    let highestScore = 0;

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray[i].length; j++) {
            const current = inputArray[i][j];
            let total = 1;
            const dir = [
                [1, 0],
                [0, 1],
                [0, -1],
                [-1, 0],
            ];

            dir.map((d) => {
                const [dx, dy] = d;
                let [x, y] = [i + dx, j + dy];
                let numTrees = 1;
                while (
                    x > 0 &&
                    y > 0 &&
                    x < inputArray.length - 1 &&
                    y < inputArray[i].length - 1 &&
                    current > inputArray[x][y]
                ) {
                    numTrees++;
                    x += dx;
                    y += dy;
                }
                total *= numTrees;
            });
            if (total > highestScore) {
                highestScore = total;
            }
        }
    }
    return highestScore;
}

const input = Deno.readTextFileSync("./8/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
