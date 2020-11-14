struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn say_name(&self) {
        println!("I am {}.", self.name);
    }

    fn say_age(&self) {
        println!("I am {} years old.", self.age);
    }
}

fn main() {
    println!("Hello, World!");

    let a = add(24, 81);
    println!("a = {}", a);

    let b = add(-10, -85);
    let c = 13;
    println!("b = {}, c = {}", b, c);
    println!("c = {1}, b = {0}\n", b, c);

    let taro = Person {
        name: String::from("Taro"),
        age: 20,
    };

    let hanako = Person {
        name: String::from("Hanako"),
        age: 22,
    };

    taro.say_name();
    taro.say_age();

    hanako.say_name();
    hanako.say_age();
}

fn add(x: i32, y: i32) -> i32 {
    x + y
}
