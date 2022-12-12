# Path: 12/solution.py


def part1(input: str) -> int:
    grid = [list(line) for line in input.splitlines()]
    start = (0, 0)
    end = (0, 0)

    for i in range(len(grid)):
        row = grid[i]
        for j in range(len(row)):
            col = row[j]
            if col == "S":
                start = (i, j)
                grid[i][j] = "a"
            if col == "E":
                end = (i, j)
                grid[i][j] = "z"

    queue: list[tuple[int, tuple[int, int]]] = [(0, start)]
    visited = set()
    visited.add(start)

    while queue:
        steps, (i, j) = queue.pop(0)

        for di, dj in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)]:
            if di < 0 or dj < 0 or di >= len(grid) or dj >= len(grid[0]):
                continue
            if ord(grid[di][dj]) - ord(grid[i][j]) > 1:
                continue
            if (di, dj) in visited:
                continue
            if (di, dj) == end:
                return steps + 1
            queue.append((steps + 1, (di, dj)))
            visited.add((di, dj))

    return -1


def part2(input: str) -> int:
    grid = [list(line) for line in input.splitlines()]
    end = (0, 0)

    for i in range(len(grid)):
        row = grid[i]
        for j in range(len(row)):
            col = row[j]
            if col == "S":
                grid[i][j] = "a"
            if col == "E":
                end = (i, j)
                grid[i][j] = "z"

    queue: list[tuple[int, tuple[int, int]]] = [(0, end)]
    visited = set()
    visited.add(end)

    while queue:
        steps, (i, j) = queue.pop(0)

        for di, dj in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)]:
            if di < 0 or dj < 0 or di >= len(grid) or dj >= len(grid[0]):
                continue
            if ord(grid[di][dj]) - ord(grid[i][j]) < -1:
                continue
            if (di, dj) in visited:
                continue
            if grid[di][dj] == "a":
                return steps + 1
            queue.append((steps + 1, (di, dj)))
            visited.add((di, dj))

    return -1


if __name__ == "__main__":
    input = open("./12/input.txt", "r").read()
    print("Part 1: " + str(part1(input)))
    print("Part 2: " + str(part2(input)))
