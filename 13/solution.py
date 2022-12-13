# Path: 13/solution.py

import json


def compare(a, b):
    if type(a) == int and type(b) == int:
        return a - b

    elif type(a) == list and type(b) == list:
        for y1, y2 in zip(a, b):
            n = compare(y1, y2)

            if n != 0:
                return n

        return len(a) - len(b)

    elif type(a) == int:
        return compare([a], b)

    else:
        return compare(a, [b])


def part1(input: str) -> int:
    parsed = list(map(str.splitlines, input.split("\n\n")))

    total = 0

    for i, (a, b) in enumerate(parsed):
        x = compare(eval(a), eval(b))
        if x < 0:
            total += i + 1

    return total


def part2(input: str) -> int:
    s = [[6]]
    t = [[2]]

    parsed = list(map(eval, input.split()))
    parsed.extend([s, t])

    parsed.sort(key=lambda x: compare(x, s))
    six_location = parsed.index(s) + 1
    parsed.sort(key=lambda x: compare(x, t))
    two_location = parsed.index(t) + 1

    return six_location * two_location


if __name__ == "__main__":
    input = open("./13/input.txt", "r").read()
    print("Part 1: " + str(part1(input)))
    print("Part 2: " + str(part2(input)))
