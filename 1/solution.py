# Path: 2022/1/solution.py


def part1(input: list[str]) -> int:
    elves = []

    total = 0
    for i in input:
        if i != "\n":
            total += int(i)
        else:
            elves.append(total)
            total = 0

    return max(elves)


def part2(input: list[str]) -> int:
    elves = []

    total = 0
    for i in input:
        if i != "\n":
            total += int(i)
        else:
            elves.append(total)
            total = 0

    elves.sort()
    return elves[-1] + elves[-2] + elves[-3]


if __name__ == "__main__":
    input = open("./1/input.txt", "r").readlines()
    print("Part 1: " + str(part1(input)))
    print("Part 2: " + str(part2(input)))
