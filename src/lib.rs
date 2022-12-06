pub fn split_input(input: &str) -> Vec<&str> {
    if input.contains("\r") {
        input.split("\r\n").collect()
    } else {
        input.split("\n").collect()
    }
}

pub fn split_double(input: &str) -> Vec<&str> {
    if input.contains("\r") {
        input.split("\r\n\r\n").collect()
    } else {
        input.split("\n\n").collect()
    }
}
