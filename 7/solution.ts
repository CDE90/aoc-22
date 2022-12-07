// Path: 7/solution.ts

interface File {
    name: string;
    size: number;
}

interface Directory {
    name: string;
    files: File[];
}

export function part1(input: string): number {
    let inputList = input.split("\r\n");

    let fileSystem: Directory[] = [];
    let currentPath = "";

    for (let i = 0; i < inputList.length; i++) {
        const line = inputList[i];
        // if line includes $ its a command
        if (line.startsWith("$")) {
            const command = line.split(" ");
            // if command is cd add directory to current directory
            if (command[1] === "cd") {
                // if command is cd .. go up one directory
                if (command[2] === "..") {
                    // if current directory is root, do nothing
                    if (currentPath === "/") {
                        continue;
                    }
                    // if current directory is not root, set current directory to parent directory
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
                // if directory already exists, set current directory to that directory
                const found = fileSystem.find(
                    (dir) => dir.name === currentPath
                );
                if (!found) {
                    fileSystem.push(newDir);
                }
            } else if (command[1] === "ls") {
                console.log("LS");
                // if command is ls, look over the next lines up to the next $ and add them to the current directory
                for (let j = i + 1; j < inputList.length; j++) {
                    const line = inputList[j].split(" ");
                    console.log(line);
                    if (line[0] === "$") {
                        break;
                    }
                    if (line[0] === "dir") {
                        const newPath = currentPath + "/" + line[1];
                        const newDir: Directory = {
                            name: newPath,
                            files: [],
                        };
                        // if dir not in filesystem, add it
                        const found = fileSystem.find(
                            (dir) => dir.name === newPath
                        );
                        if (!found) {
                            fileSystem.push(newDir);
                        }
                    } else {
                        const size = parseInt(line[0]);
                        const name = line[1];
                        const newFile: File = {
                            name: name,
                            size: size,
                        };
                        // if file not in filesystem, add it
                        const found = fileSystem.find((dir) =>
                            dir.files.find((file) => file.name === name)
                        );
                        if (!found) {
                            // add to directory in filesystem
                            for (const dir of fileSystem) {
                                if (dir.name === currentPath) {
                                    dir.files.push(newFile);
                                }
                            }
                        }
                    }
                }
            }
        } else {
            continue;
        }
    }
    fileSystem.forEach((dir) => {
        console.log(dir);
    });

    // find all the directories with a size of at most 100000
    // for each directory we need to check the size of all the files in it and any subdirectories
    // subdirectories will be in the filesystem with a path that starts with the current directory
    function findSubDirs(dir: Directory): Directory[] {
        let subDirs: Directory[] = [];
        for (const subDir of fileSystem) {
            if (subDir.name.startsWith(dir.name) && subDir.name !== dir.name) {
                subDirs.push(subDir);
            }
        }
        return subDirs;
    }
    let totalSize = 0;
    for (const dir of fileSystem) {
        let size = 0;
        for (const file of dir.files) {
            size += file.size;
        }
        const subDirs = findSubDirs(dir);
        for (const subDir of subDirs) {
            for (const file of subDir.files) {
                size += file.size;
            }
        }
        console.log("size:", size);
        if (size <= 100000) {
            totalSize += size;
        }
    }
    return totalSize;
}

export function part2(input: string): number {
    return 0;
}

const input = Deno.readTextFileSync("./7/input.txt");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
