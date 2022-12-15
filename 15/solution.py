# Path: 15/solution.py

# THIS IS A SOLUTION VERY VERY HEAVILY BASED OFF
# HYPER-NEUTRINO's SOLUTION (sorry and thanks!)
# https://github.com/hyper-neutrino/advent-of-code
# https://www.youtube.com/watch?v=OG1QwJ2RKsU

import re

pattern = re.compile(r"-?\d+")


def part1(input: str) -> int:
    y = 2_000_000
    known = set()
    intervals = []

    for line in input.splitlines():
        x1, y1, x2, y2 = map(int, pattern.findall(line))

        dist = abs(x1 - x2) + abs(y1 - y2)
        offset = dist - abs(y1 - y)

        if offset < 0:
            continue

        lx = x1 - offset
        hx = x1 + offset

        intervals.append((lx, hx))

        if y2 == y:
            known.add(x2)

    intervals.sort()

    q = []

    for low, high in intervals:
        if not q:
            q.append((low, high))
            continue

        qlo, qhi = q[-1]

        if low > qhi + 1:
            q.append((low, high))
        else:
            q[-1] = (qlo, max(qhi, high))

    cannot = set()

    for low, high in q:
        for x in range(low, high + 1):
            cannot.add(x)

    return len(cannot - known)


def part2(input: str) -> int:
    lines = [list(map(int, pattern.findall(line))) for line in input.splitlines()]

    M = 4_000_000

    for y in range(M + 1):
        intervals = []

        for x1, y1, x2, y2 in lines:
            dist = abs(x1 - x2) + abs(y1 - y2)
            offset = dist - abs(y1 - y)

            if offset < 0:
                continue

            lx = x1 - offset
            hx = x1 + offset

            intervals.append((lx, hx))

        intervals.sort()

        q = []

        for low, high in intervals:
            if not q:
                q.append((low, high))
                continue

            qlo, qhi = q[-1]

            if low > qhi + 1:
                q.append((low, high))
            else:
                q[-1] = (qlo, max(qhi, high))

        x = 0
        for lo, hi in q:
            if x < lo:
                return x * 4000000 + y
            x = max(x, hi + 1)
            if x > M:
                break

    return -1


if __name__ == "__main__":
    input = open("./15/input.txt", "r").read()
    print("Part 1: " + str(part1(input)))
    print("Part 2: " + str(part2(input)))
