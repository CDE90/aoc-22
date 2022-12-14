# Path: 14/solution.py


def part1(input: str) -> int:
    input_lines = input.splitlines()

    max_x = 0
    max_y = 0
    min_x = 100000000
    min_y = 100000000

    for line in input_lines:
        for part in line.split("->"):
            part = part.strip()
            x, y = part.split(",")
            x = int(x)
            y = int(y)
            if x > max_x:
                max_x = x
            if y > max_y:
                max_y = y
            if x < min_x:
                min_x = x
            if y < min_y:
                min_y = y

    grid = [["." for x in range(max_x - min_x + 1)] for y in range(max_y + 1)]

    # replace the point at 500,0 with a +
    grid[0][500 - min_x] = "+"

    for line in input_lines:
        line = line.strip()
        parts = line.split("->")
        for i in range(len(parts) - 1):
            parts[i] = parts[i].strip()
            x, y = parts[i].split(",")
            dx, dy = parts[i + 1].split(",")
            x = int(x)
            y = int(y)
            dx = int(dx)
            dy = int(dy)
            # go from x,y to dx,dy and mark the path with #
            if x == dx:
                # vertical
                if y < dy:
                    for i in range(y, dy + 1):
                        grid[i][x - min_x] = "#"
                else:
                    for i in range(dy, y + 1):
                        grid[i][x - min_x] = "#"
            else:
                # horizontal
                if x < dx:
                    for i in range(x, dx + 1):
                        grid[y][i - min_x] = "#"
                else:
                    for i in range(dx, x + 1):
                        grid[y][i - min_x] = "#"

    active_sand = (500 - min_x, 0)
    total_sand = 0

    while True:
        x, y = active_sand
        if y == max_y:
            break
        if x < 0 or x > max_x - min_x:
            break
        if grid[y + 1][x] == ".":
            active_sand = (x, y + 1)
        elif grid[y + 1][x - 1] == ".":
            active_sand = (x - 1, y + 1)
        elif grid[y + 1][x + 1] == ".":
            active_sand = (x + 1, y + 1)
        else:
            grid[y][x] = "o"
            total_sand += 1
            active_sand = (500 - min_x, 0)

    g = "\n".join(["".join(row) for row in grid])
    with open("./14/grid1.txt", "w") as f:
        f.write(g)

    return total_sand


def part2(input: str) -> int:
    input_lines = input.splitlines()

    max_y = 0

    for line in input_lines:
        for part in line.split("->"):
            part = part.strip()
            _, y = part.split(",")
            y = int(y)
            if y > max_y:
                max_y = y

    max_y += 1
    min_x = 500 - max_y - 1
    max_x = 500 + max_y + 1

    grid = [["." for x in range(max_x - min_x + 1)] for y in range(max_y + 1)]
    grid.append(["#" for x in range(max_x - min_x + 1)])
    max_y += 1

    # replace the point at 500,0 with a +
    grid[0][500 - min_x] = "+"

    for line in input_lines:
        line = line.strip()
        parts = line.split("->")
        for i in range(len(parts) - 1):
            parts[i] = parts[i].strip()
            x, y = parts[i].split(",")
            dx, dy = parts[i + 1].split(",")
            x = int(x)
            y = int(y)
            dx = int(dx)
            dy = int(dy)
            # go from x,y to dx,dy and mark the path with #
            if x == dx:
                # vertical
                if y < dy:
                    for i in range(y, dy + 1):
                        grid[i][x - min_x] = "#"
                else:
                    for i in range(dy, y + 1):
                        grid[i][x - min_x] = "#"
            else:
                # horizontal
                if x < dx:
                    for i in range(x, dx + 1):
                        grid[y][i - min_x] = "#"
                else:
                    for i in range(dx, x + 1):
                        grid[y][i - min_x] = "#"

    active_sand = (500 - min_x, 0)
    total_sand = 0

    while True:
        x, y = active_sand
        if y == max_y:
            break
        if x < 0 or x > max_x - min_x:
            break
        if grid[y + 1][x] == ".":
            active_sand = (x, y + 1)
        elif grid[y + 1][x - 1] == ".":
            active_sand = (x - 1, y + 1)
        elif grid[y + 1][x + 1] == ".":
            active_sand = (x + 1, y + 1)
        else:
            grid[y][x] = "o"
            total_sand += 1
            if active_sand == (500 - min_x, 0):
                break
            active_sand = (500 - min_x, 0)

    g = "\n".join(["".join(row) for row in grid])
    with open("./14/grid2.txt", "w") as f:
        f.write(g)

    return total_sand


if __name__ == "__main__":
    input = open("./14/input.txt", "r").read()
    print("Part 1: " + str(part1(input)))
    print("Part 2: " + str(part2(input)))
