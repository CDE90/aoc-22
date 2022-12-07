// Path: 7/solution.ts

interface File {
    name: string;
    size: number;
}

interface Directory {
    name: string;
    files: File[];
}

function parseFileSystem(input: string): Directory[] {
    const inputList = input.split("\r\n");

    const fileSystem: Directory[] = [];
    let currentPath = "";

    for (let i = 0; i < inputList.length; i++) {
        const line = inputList[i];
        if (!line.startsWith("$")) continue;
        const command = line.split(" ");
        if (command[1] === "cd") {
            if (command[2] === "..") {
                if (currentPath === "/") continue;
                for (const dir of fileSystem) {
                    if (dir.name === currentPath) {
                        currentPath = currentPath
                            .split("/")
                            .slice(0, -1)
                            .join("/");
                    }
                }
                continue;
            }
            if (command[2] !== "/") {
                currentPath += "/";
            }
            currentPath += command[2];
            const newDir: Directory = {
                name: currentPath,
                files: [],
            };
            const found = fileSystem.find((dir) => dir.name === currentPath);
            if (!found) fileSystem.push(newDir);
        } else if (command[1] === "ls") {
            for (let j = i + 1; j < inputList.length; j++) {
                const line = inputList[j].split(" ");
                if (line[0] === "$") break;
                if (line[0] === "dir") {
                    const newPath = currentPath + "/" + line[1];
                    const newDir: Directory = {
                        name: newPath,
                        files: [],
                    };
                    const found = fileSystem.find(
                        (dir) => dir.name === newPath
                    );
                    if (!found) fileSystem.push(newDir);
                } else {
                    const size = parseInt(line[0]);
                    const name = line[1];
                    const newFile: File = {
                        name: name,
                        size: size,
                    };
                    for (const dir of fileSystem) {
                        if (dir.name === currentPath) {
                            dir.files.push(newFile);
                        }
                    }
                }
            }
        }
    }
    return fileSystem;
}

function findSubDirs(fileSystem: Directory[], dir: Directory): Directory[] {
    const subDirs: Directory[] = [];
    for (const subDir of fileSystem) {
        if (subDir.name.startsWith(dir.name) && subDir.name !== dir.name) {
            subDirs.push(subDir);
        }
    }
    return subDirs;
}

export function part1(input: string): number {
    const fileSystem = parseFileSystem(input);

    let totalSize = 0;
    for (const dir of fileSystem) {
        let size = 0;
        for (const file of dir.files) {
            size += file.size;
        }
        const subDirs = findSubDirs(fileSystem, dir);
        for (const subDir of subDirs) {
            for (const file of subDir.files) {
                size += file.size;
            }
        }
        if (size <= 100000) {
            totalSize += size;
        }
    }
    return totalSize;
}

export function part2(input: string): number {
    const fileSystem = parseFileSystem(input);

    const total = fileSystem
        .map((dir) =>
            dir.files.map((file) => file.size).reduce((a, b) => a + b, 0)
        )
        .reduce((a, b) => a + b, 0);

    const cutOff = total - (70000000 - 30000000);
    let suitableDirSize = Infinity;
    for (const dir of fileSystem) {
        let size = 0;
        for (const file of dir.files) {
            size += file.size;
        }
        const subDirs = findSubDirs(fileSystem, dir);
        for (const subDir of subDirs) {
            for (const file of subDir.files) {
                size += file.size;
            }
        }
        if (size >= cutOff && size < suitableDirSize) {
            suitableDirSize = size;
        }
    }
    return suitableDirSize;
}

const input = Deno.readTextFileSync("./7/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
