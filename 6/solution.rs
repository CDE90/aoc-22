// Path: 6/solution.rs

use std::{fs::File, io::Read};

fn part1(input: &str) -> usize {
    let mut index = 0;

    for i in 3..input.len() {
        let mut items: Vec<&str> = input[i - 3..=i].split("").filter(|&x| x != "").collect();
        items.sort();
        items.dedup();

        if items.len() == 4 {
            index = i + 1;
            break;
        }
    }

    index
}

fn part2(input: &str) -> usize {
    let mut index = 0;

    for i in 13..input.len() {
        let mut items: Vec<&str> = input[i - 13..=i].split("").filter(|&x| x != "").collect();
        items.sort();
        items.dedup();

        if items.len() == 14 {
            index = i + 1;
            break;
        }
    }

    index
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
