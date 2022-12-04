// Path: 2/solution.rs

use std::{fs::File, io::Read};

enum RPS {
    Rock,
    Paper,
    Scissors,
}

impl RPS {
    fn from_str(s: &str) -> RPS {
        match s {
            "A" => RPS::Rock,
            "B" => RPS::Paper,
            "C" => RPS::Scissors,
            "X" => RPS::Rock,
            "Y" => RPS::Paper,
            "Z" => RPS::Scissors,
            _ => unreachable!(),
        }
    }
}

enum OUTCOME {
    Win,
    Draw,
    Loss,
}

impl OUTCOME {
    fn from_str(s: &str) -> OUTCOME {
        match s {
            "X" => OUTCOME::Loss,
            "Y" => OUTCOME::Draw,
            "Z" => OUTCOME::Win,
            _ => unreachable!(),
        }
    }
}

fn part1(input: &str) -> u64 {
    let input_list: Vec<(RPS, RPS)> = input
        .lines()
        .map(|line| {
            let mut iter = line.split_whitespace();
            let a = RPS::from_str(iter.next().unwrap());
            let b = RPS::from_str(iter.next().unwrap());
            (a, b)
        })
        .collect();
    let mut score = 0;

    for i in input_list {
        match i {
            (RPS::Rock, RPS::Rock) => score += 3 + 1,
            (RPS::Rock, RPS::Paper) => score += 6 + 2,
            (RPS::Rock, RPS::Scissors) => score += 0 + 3,
            (RPS::Paper, RPS::Rock) => score += 0 + 1,
            (RPS::Paper, RPS::Paper) => score += 3 + 2,
            (RPS::Paper, RPS::Scissors) => score += 6 + 3,
            (RPS::Scissors, RPS::Rock) => score += 6 + 1,
            (RPS::Scissors, RPS::Paper) => score += 0 + 2,
            (RPS::Scissors, RPS::Scissors) => score += 3 + 3,
        }
    }

    score
}

fn part2(input: &str) -> u64 {
    let input_list: Vec<(RPS, OUTCOME)> = input
        .lines()
        .map(|line| {
            let mut iter = line.split_whitespace();
            let a = RPS::from_str(iter.next().unwrap());
            let b = OUTCOME::from_str(iter.next().unwrap());
            (a, b)
        })
        .collect();
    let mut score = 0;

    for i in input_list {
        match i {
            (RPS::Rock, OUTCOME::Loss) => score += 0 + 3,
            (RPS::Rock, OUTCOME::Draw) => score += 3 + 1,
            (RPS::Rock, OUTCOME::Win) => score += 6 + 2,
            (RPS::Paper, OUTCOME::Loss) => score += 0 + 1,
            (RPS::Paper, OUTCOME::Draw) => score += 3 + 2,
            (RPS::Paper, OUTCOME::Win) => score += 6 + 3,
            (RPS::Scissors, OUTCOME::Loss) => score += 0 + 2,
            (RPS::Scissors, OUTCOME::Draw) => score += 3 + 3,
            (RPS::Scissors, OUTCOME::Win) => score += 6 + 1,
        }
    }

    score
}

fn read_input() -> String {
    let mut input = String::new();
    let mut file = File::open("./2/input.txt").unwrap();
    file.read_to_string(&mut input).unwrap();
    input
}

fn main() {
    let input = read_input();
    println!("Part 1: {}", part1(&input));
    println!("Part 2: {}", part2(&input));
}
