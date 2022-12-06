# Path: 4/solution.py


def part1(input: str) -> int:
    input_list = input.split("\n")
    sum = 0

    for i in input_list:
        elves = i.split(",")
        first_elf = elves[0].split("-")
        second_elf = elves[1].split("-")

        if int(first_elf[0]) >= int(second_elf[0]) and int(first_elf[1]) <= int(
            second_elf[1]
        ):
            sum += 1
        elif int(second_elf[0]) >= int(first_elf[0]) and int(second_elf[1]) <= int(
            first_elf[1]
        ):
            sum += 1

    return sum


def part2(input: str) -> int:
    input_list = input.split("\n")
    sum = 0

    for i in input_list:
        elves = i.split(",")
        first_elf = elves[0].split("-")
        second_elf = elves[1].split("-")

        # if there is any overlap
        if int(first_elf[0]) <= int(second_elf[0]) and int(first_elf[1]) >= int(
            second_elf[0]
        ):
            sum += 1
        elif int(second_elf[0]) <= int(first_elf[0]) and int(second_elf[1]) >= int(
            first_elf[0]
        ):
            sum += 1

    return sum


if __name__ == "__main__":
    input = open("./4/input.txt", "r").read()
    print("Part 1: " + str(part1(input)))
    print("Part 2: " + str(part2(input)))
