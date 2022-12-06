// Path: 4/solution.rs

use std::{fs::File, io::Read};

fn part1(input: &str) -> u64 {
    let input: Vec<&str> = input.split("\r\n").collect();

    let mut sum = 0;

    for i in input {
        let elves: Vec<&str> = i.split(",").collect();
        let first_range: Vec<u64> = elves[0].split("-").map(|x| x.parse().unwrap()).collect();
        let second_range: Vec<u64> = elves[1].split("-").map(|x| x.parse().unwrap()).collect();

        if first_range[0] >= second_range[0] && first_range[1] <= second_range[1] {
            sum += 1;
        } else if second_range[0] >= first_range[0] && second_range[1] <= first_range[1] {
            sum += 1;
        }
    }

    sum
}

fn part2(input: &str) -> u64 {
    let input: Vec<&str> = input.split("\r\n").collect();

    let mut sum = 0;

    for i in input {
        let elves: Vec<&str> = i.split(",").collect();
        let first_range: Vec<u64> = elves[0].split("-").map(|x| x.parse().unwrap()).collect();
        let second_range: Vec<u64> = elves[1].split("-").map(|x| x.parse().unwrap()).collect();

        if first_range[0] <= second_range[1] && first_range[1] >= second_range[0] {
            sum += 1;
        } else if second_range[0] <= first_range[1] && second_range[1] >= first_range[0] {
            sum += 1;
        }
    }

    sum
}

fn read_input() -> String {
    let mut input = String::new();
    let mut file = File::open("./4/input.txt").unwrap();
    file.read_to_string(&mut input).unwrap();
    input
}

fn main() {
    let input = read_input();
    println!("Part 1: {}", part1(&input));
    println!("Part 2: {}", part2(&input));
}
