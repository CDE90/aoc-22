# Path: 11/solution.py


class Monkey:
    def __init__(
        self,
        starting_items: list[int],
        operation: str,
        test: str,
        true_test: int,
        false_test: int,
    ):
        self.starting_items = starting_items
        self.operation = operation
        self.test = test
        self.true_test = true_test
        self.false_test = false_test
        self.inspected = 0

    def __str__(self):
        return f"Monkey({self.starting_items}, {self.operation}, {self.test})"

    def __repr__(self):
        return self.__str__()

    def complete_operation(self, index: int):
        old = self.starting_items[index]
        new = eval(self.operation, {"old": old})
        self.starting_items[index] = int(new / 3)
        self.inspected += 1

    def complete_operation_2(self, index: int, global_mod: int):
        old = self.starting_items[index]
        new = eval(self.operation, {"old": old})
        self.starting_items[index] = int(new) % global_mod
        self.inspected += 1

    def test_operation(self, number: int) -> bool:
        return eval(self.test, {"old": number})


def part1(input: str) -> int:
    monkeys = input.split("\n\n")
    monkey_list: list[Monkey] = []

    for m in monkeys:
        starting_items = m.split("\n")[1].split(": ")[1].split(", ")
        operation = m.split("\n")[2].split("= ")[1]
        raw_test = m.split("\n")[3].split(": ")[1]
        test = raw_test.replace("divisible by ", "old % ") + " == 0"
        true_test = int(m.split("\n")[4].split(" ")[-1])
        false_test = int(m.split("\n")[5].split(" ")[-1])
        monkey_list.append(
            Monkey(
                list(map(int, starting_items)), operation, test, true_test, false_test
            )
        )

    round = 1
    while round <= 20:
        for monkey in monkey_list:
            index_modifier = 0
            for i in range(len(monkey.starting_items)):
                monkey.complete_operation(i - index_modifier)
                if monkey.test_operation(monkey.starting_items[i - index_modifier]):
                    new_monkey = monkey.true_test
                    item = monkey.starting_items.pop(i - index_modifier)
                    monkey_list[new_monkey].starting_items.append(item)
                    index_modifier += 1
                else:
                    new_monkey = monkey.false_test
                    item = monkey.starting_items.pop(i - index_modifier)
                    monkey_list[new_monkey].starting_items.append(item)
                    index_modifier += 1
        round += 1

    monkey_list.sort(key=lambda x: x.inspected, reverse=True)
    return monkey_list[0].inspected * monkey_list[1].inspected


def part2(input: str) -> int:
    monkeys = input.split("\n\n")
    monkey_list: list[Monkey] = []

    for m in monkeys:
        starting_items = m.split("\n")[1].split(": ")[1].split(", ")
        operation = m.split("\n")[2].split("= ")[1]
        raw_test = m.split("\n")[3].split(": ")[1]
        test = raw_test.replace("divisible by ", "old % ") + " == 0"
        true_test = int(m.split("\n")[4].split(" ")[-1])
        false_test = int(m.split("\n")[5].split(" ")[-1])
        monkey_list.append(
            Monkey(
                list(map(int, starting_items)), operation, test, true_test, false_test
            )
        )

    global_mod = 1
    for monkey in monkey_list:
        global_mod *= int(monkey.test.split(" ")[2])

    round = 1
    while round <= 10_000:
        for monkey in monkey_list:
            index_modifier = 0
            for i in range(len(monkey.starting_items)):
                monkey.complete_operation_2(i - index_modifier, global_mod)
                if monkey.test_operation(monkey.starting_items[i - index_modifier]):
                    new_monkey = monkey.true_test
                    item = monkey.starting_items.pop(i - index_modifier)
                    monkey_list[new_monkey].starting_items.append(item)
                    index_modifier += 1
                else:
                    new_monkey = monkey.false_test
                    item = monkey.starting_items.pop(i - index_modifier)
                    monkey_list[new_monkey].starting_items.append(item)
                    index_modifier += 1
        round += 1

    monkey_list.sort(key=lambda x: x.inspected, reverse=True)
    return monkey_list[0].inspected * monkey_list[1].inspected


if __name__ == "__main__":
    input = open("./11/input.txt", "r").read()
    print("Part 1: " + str(part1(input)))
    print("Part 2: " + str(part2(input)))
