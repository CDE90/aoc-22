// Path: 2022/1/solution.rs

use std::{fs::File, io::Read};

fn part1(input: &str) -> u64 {
    let v: Vec<&str> = input.split("\n").collect();
    let mut elves: Vec<u32> = vec![];

    let mut sum = 0;

    for line in v {
        if line != "" {
            sum += line.parse::<u32>().unwrap();
        } else {
            elves.push(sum);
            sum = 0;
        }
    }

    elves.iter().max().unwrap().to_owned() as u64
}

fn part2(input: &str) -> u64 {
    let v: Vec<&str> = input.split("\n").collect();
    let mut elves: Vec<u32> = vec![];

    let mut sum = 0;

    for line in v {
        if line != "" {
            sum += line.parse::<u32>().unwrap();
        } else {
            elves.push(sum);
            sum = 0;
        }
    }
    elves.sort();

    let length = elves.len();
    elves[length - 1] as u64 + elves[length - 2] as u64 + elves[length - 3] as u64
}

fn read_input() -> String {
    let mut input = String::new();
    let mut file = File::open("./1/input.txt").unwrap();
    file.read_to_string(&mut input).unwrap();
    input
}

fn main() {
    let input = read_input();
    println!("Part 1: {}", part1(&input));
    println!("Part 2: {}", part2(&input));
}
