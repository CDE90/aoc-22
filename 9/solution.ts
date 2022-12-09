// Path: 9/solution.ts

function moveTail(
    tail: [number, number],
    head: [number, number]
): [number, number] {
    const [hx, hy] = head;
    const [tx, ty] = tail;

    if (hx === tx && hy === ty + 1) {
        return [tx, ty];
    } else if (hx === tx && hy === ty - 1) {
        return [tx, ty];
    } else if (hx === tx + 1 && hy === ty) {
        return [tx, ty];
    } else if (hx === tx - 1 && hy === ty) {
        return [tx, ty];
    } else if (hx === tx + 1 && hy === ty + 1) {
        return [tx, ty];
    } else if (hx === tx - 1 && hy === ty + 1) {
        return [tx, ty];
    } else if (hx === tx + 1 && hy === ty - 1) {
        return [tx, ty];
    } else if (hx === tx - 1 && hy === ty - 1) {
        return [tx, ty];
    }

    if (hx === tx + 2 && hy === ty) {
        return [tx + 1, ty];
    } else if (hx === tx - 2 && hy === ty) {
        return [tx - 1, ty];
    } else if (hx === tx && hy === ty + 2) {
        return [tx, ty + 1];
    } else if (hx === tx && hy === ty - 2) {
        return [tx, ty - 1];
    } else if (hx === tx + 1 && hy === ty + 2) {
        return [tx + 1, ty + 1];
    } else if (hx === tx - 1 && hy === ty + 2) {
        return [tx - 1, ty + 1];
    } else if (hx === tx + 1 && hy === ty - 2) {
        return [tx + 1, ty - 1];
    } else if (hx === tx - 1 && hy === ty - 2) {
        return [tx - 1, ty - 1];
    } else if (hx === tx + 2 && hy === ty + 1) {
        return [tx + 1, ty + 1];
    } else if (hx === tx - 2 && hy === ty + 1) {
        return [tx - 1, ty + 1];
    } else if (hx === tx + 2 && hy === ty - 1) {
        return [tx + 1, ty - 1];
    } else if (hx === tx - 2 && hy === ty - 1) {
        return [tx - 1, ty - 1];
    } else if (hx === tx + 2 && hy === ty + 2) {
        return [tx + 1, ty + 1];
    } else if (hx === tx - 2 && hy === ty + 2) {
        return [tx - 1, ty + 1];
    } else if (hx === tx + 2 && hy === ty - 2) {
        return [tx + 1, ty - 1];
    } else if (hx === tx - 2 && hy === ty - 2) {
        return [tx - 1, ty - 1];
    } else {
        return tail;
    }
}

export function part1(input: string): number {
    const lines = input.split("\r\n");

    let [hx, hy] = [0, 0];
    let [tx, ty] = [0, 0];
    const tPositions = new Set<string>();

    for (let i = 0; i < lines.length; i++) {
        const [direction, n] = lines[i].split(" ");
        const number = parseInt(n);

        switch (direction) {
            case "R":
                {
                    for (let j = 0; j < number; j++) {
                        hx++;
                        [tx, ty] = moveTail([tx, ty], [hx, hy]);
                        tPositions.add(`${tx},${ty}`);
                    }
                }
                break;
            case "L":
                {
                    for (let j = 0; j < number; j++) {
                        hx--;
                        [tx, ty] = moveTail([tx, ty], [hx, hy]);
                        tPositions.add(`${tx},${ty}`);
                    }
                }
                break;
            case "U":
                {
                    for (let j = 0; j < number; j++) {
                        hy++;
                        [tx, ty] = moveTail([tx, ty], [hx, hy]);
                        tPositions.add(`${tx},${ty}`);
                    }
                }
                break;
            case "D":
                {
                    for (let j = 0; j < number; j++) {
                        hy--;
                        [tx, ty] = moveTail([tx, ty], [hx, hy]);
                        tPositions.add(`${tx},${ty}`);
                    }
                }
                break;
        }
    }

    return tPositions.size;
}

export function part2(input: string): number {
    const lines = input.split("\r\n");

    let [hx, hy] = [0, 0];
    let [h1x, h1y] = [0, 0];
    let [h2x, h2y] = [0, 0];
    let [h3x, h3y] = [0, 0];
    let [h4x, h4y] = [0, 0];
    let [h5x, h5y] = [0, 0];
    let [h6x, h6y] = [0, 0];
    let [h7x, h7y] = [0, 0];
    let [h8x, h8y] = [0, 0];
    let [tx, ty] = [0, 0];
    const tPositions = new Set<string>();

    for (let i = 0; i < lines.length; i++) {
        const [direction, n] = lines[i].split(" ");
        const number = parseInt(n);

        switch (direction) {
            case "R":
                {
                    for (let j = 0; j < number; j++) {
                        hx++;
                        [h1x, h1y] = moveTail([h1x, h1y], [hx, hy]);
                        [h2x, h2y] = moveTail([h2x, h2y], [h1x, h1y]);
                        [h3x, h3y] = moveTail([h3x, h3y], [h2x, h2y]);
                        [h4x, h4y] = moveTail([h4x, h4y], [h3x, h3y]);
                        [h5x, h5y] = moveTail([h5x, h5y], [h4x, h4y]);
                        [h6x, h6y] = moveTail([h6x, h6y], [h5x, h5y]);
                        [h7x, h7y] = moveTail([h7x, h7y], [h6x, h6y]);
                        [h8x, h8y] = moveTail([h8x, h8y], [h7x, h7y]);
                        [tx, ty] = moveTail([tx, ty], [h8x, h8y]);
                        tPositions.add(`${tx},${ty}`);
                    }
                }
                break;
            case "L":
                {
                    for (let j = 0; j < number; j++) {
                        hx--;
                        [h1x, h1y] = moveTail([h1x, h1y], [hx, hy]);
                        [h2x, h2y] = moveTail([h2x, h2y], [h1x, h1y]);
                        [h3x, h3y] = moveTail([h3x, h3y], [h2x, h2y]);
                        [h4x, h4y] = moveTail([h4x, h4y], [h3x, h3y]);
                        [h5x, h5y] = moveTail([h5x, h5y], [h4x, h4y]);
                        [h6x, h6y] = moveTail([h6x, h6y], [h5x, h5y]);
                        [h7x, h7y] = moveTail([h7x, h7y], [h6x, h6y]);
                        [h8x, h8y] = moveTail([h8x, h8y], [h7x, h7y]);
                        [tx, ty] = moveTail([tx, ty], [h8x, h8y]);
                        tPositions.add(`${tx},${ty}`);
                    }
                }
                break;
            case "U":
                {
                    for (let j = 0; j < number; j++) {
                        hy++;
                        [h1x, h1y] = moveTail([h1x, h1y], [hx, hy]);
                        [h2x, h2y] = moveTail([h2x, h2y], [h1x, h1y]);
                        [h3x, h3y] = moveTail([h3x, h3y], [h2x, h2y]);
                        [h4x, h4y] = moveTail([h4x, h4y], [h3x, h3y]);
                        [h5x, h5y] = moveTail([h5x, h5y], [h4x, h4y]);
                        [h6x, h6y] = moveTail([h6x, h6y], [h5x, h5y]);
                        [h7x, h7y] = moveTail([h7x, h7y], [h6x, h6y]);
                        [h8x, h8y] = moveTail([h8x, h8y], [h7x, h7y]);
                        [tx, ty] = moveTail([tx, ty], [h8x, h8y]);
                        tPositions.add(`${tx},${ty}`);
                    }
                }
                break;
            case "D":
                {
                    for (let j = 0; j < number; j++) {
                        hy--;
                        [h1x, h1y] = moveTail([h1x, h1y], [hx, hy]);
                        [h2x, h2y] = moveTail([h2x, h2y], [h1x, h1y]);
                        [h3x, h3y] = moveTail([h3x, h3y], [h2x, h2y]);
                        [h4x, h4y] = moveTail([h4x, h4y], [h3x, h3y]);
                        [h5x, h5y] = moveTail([h5x, h5y], [h4x, h4y]);
                        [h6x, h6y] = moveTail([h6x, h6y], [h5x, h5y]);
                        [h7x, h7y] = moveTail([h7x, h7y], [h6x, h6y]);
                        [h8x, h8y] = moveTail([h8x, h8y], [h7x, h7y]);
                        [tx, ty] = moveTail([tx, ty], [h8x, h8y]);
                        tPositions.add(`${tx},${ty}`);
                    }
                }
                break;
        }
    }

    return tPositions.size;
}

const input = Deno.readTextFileSync("./9/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
