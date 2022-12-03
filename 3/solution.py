# Path: 3/solution.py

chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


def part1(input: str) -> int:
    input_list = input.split("\n")

    total = 0

    for i in input_list:
        # split i in half
        first_half = i[0 : int(len(i) / 2)]
        second_half = i[int(len(i) / 2) :]
        for c in chars:
            if first_half.count(c) > 0 and second_half.count(c) > 0:
                total += chars.index(c) + 1

    return total


def part2(input: str) -> int:
    input_list = input.split("\n")

    total = 0

    for i in range(0, len(input_list), 3):
        first = input_list[i]
        second = input_list[i + 1]
        third = input_list[i + 2]
        for c in chars:
            if first.count(c) > 0 and second.count(c) > 0 and third.count(c) > 0:
                total += chars.index(c) + 1

    return total


if __name__ == "__main__":
    input = open("./3/input.txt", "r").read()
    print("Part 1: " + str(part1(input)))
    print("Part 2: " + str(part2(input)))
