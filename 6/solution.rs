// Path: 6/solution.rs

use std::{fs::File, io::Read};

fn part1(input: &str) -> usize {
    input
        .as_bytes()
        .windows(4)
        .position(|w| {
            w.iter()
                .all(|&x| w.iter().filter(|&y| x == *y).count() == 1)
        })
        .unwrap()
        + 4
}

fn part2(input: &str) -> usize {
    input
        .as_bytes()
        .windows(14)
        .position(|w| {
            // all unique
            w.iter()
                .all(|&x| w.iter().filter(|&y| x == *y).count() == 1)
        })
        .unwrap()
        + 14
}

fn read_input() -> String {
    let mut input = String::new();
    let mut file = File::open("./6/input.txt").unwrap();
    file.read_to_string(&mut input).unwrap();
    input
}

fn main() {
    let input = read_input();
    println!("Part 1: {}", part1(&input));
    println!("Part 2: {}", part2(&input));
}
