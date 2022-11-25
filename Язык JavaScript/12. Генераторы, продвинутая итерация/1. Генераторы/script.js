// 1. Псевдослучайный генератор

function* pseudoRandom(value) {
    while (true)
        yield value = value * 16807 % 2147483647;
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
