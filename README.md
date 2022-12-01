# My Advent of Code 2022 Solutions

This repository contains my solutions to the [Advent of Code 2022](https://adventofcode.com/2022) challenges.
I will try to have solutions for each day written in [Rust](https://www.rust-lang.org/), [Python](https://www.python.org/), and [TypeScript](https://www.typescriptlang.org/). I'm using Advent of Code as a way to learn these languages, so I'm sure there will be some mistakes and bad practices.

The boilerplate code for each day is generated using my [AoC template generator](https://github.com/CDE90/aoc-tools).

## Running the solutions

The easiest way to run the solutions is with my custom [AoC Tool](https://github.com/CDE90/aoc-tools).

```bash
aoc r -d {day} -l {language}
```

Language can be one of `rs`, `py`, or `ts`.

You will need to install the relevant language toolchain to run the solutions. [Rust](https://www.rust-lang.org/tools/install), [Python](https://www.python.org/downloads/), and [Deno](https://deno.land/#installation) are required.

<details>
<summary>Running without tool</summary>
<br>

### Rust

To run the Rust solutions, you need to have [Rust](https://www.rust-lang.org/) installed.
Then, you can run the solutions using `cargo run --bin aoc-XX` where `XX` is the day number.

### Python

To run the Python solutions, you need to have [Python](https://www.python.org/) installed.
Then, you can run the solutions using `python3 -m XX/solution.py` where `XX` is the day number.

### TypeScript

To run the TypeScript solutions, you need to have [Deno](https://deno.land/) installed.
Then, you can run the solutions using `deno run --allow-read XX/solution.ts` where `XX` is the day number.

</details>
