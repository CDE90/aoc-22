// Path: 3/solution.rs

use std::{fs::File, io::Read};

const CHARS: &str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

fn part1(input: &str) -> usize {
    let input: Vec<&str> = input.split("\n").collect();

    let mut sum = 0;

    for i in input {
        let first_half = i[0..(i.len() / 2)].to_string();
        let second_half = i[(i.len() / 2)..].to_string();

        CHARS.chars().for_each(|c| {
            if first_half.matches(c).count() > 0 && second_half.matches(c).count() > 0 {
                sum += CHARS.find(c).unwrap() + 1;
            }
        });
    }

    sum
}

fn part2(input: &str) -> usize {
    let input: Vec<&str> = input.split("\n").collect();

    let mut sum = 0;

    for i in (0..input.len()).step_by(3) {
        let first = input[i];
        let second = input[i + 1];
        let third = input[i + 2];

        CHARS.chars().for_each(|c| {
            if first.matches(c).count() > 0
                && second.matches(c).count() > 0
                && third.matches(c).count() > 0
            {
                sum += CHARS.find(c).unwrap() + 1;
            }
        });
    }

    sum
}

fn read_input() -> String {
    let mut input = String::new();
    let mut file = File::open("./3/input.txt").unwrap();
    file.read_to_string(&mut input).unwrap();
    input
}

fn main() {
    let input = read_input();
    println!("Part 1: {}", part1(&input));
    println!("Part 2: {}", part2(&input));
}
