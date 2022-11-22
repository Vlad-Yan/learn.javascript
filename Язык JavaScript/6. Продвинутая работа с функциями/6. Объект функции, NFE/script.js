// 1. Установка и уменьшение значения счётчика

function makeCounter() {
  let count = 0;

  function counter() {
      return count++;
    }

  counter.set = value => count = value;
  counter.decrease = () => count--;
  return counter;
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2
console.log( counter() ); // 3
console.log( counter() ); // 4

counter.set(10); // установить новое значение счётчика
console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1
console.log( counter() ); // 10 (вместо 11)


// 2. Сумма с произвольным количеством скобок

function sum(a) {
    let currentSum = a;

    function f(b) {
      currentSum += b;
      return f;
    }

    f.toString = function() {
      return currentSum;
    };

    return f;
}

console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1)(2) ); // 6
console.log( sum(6)(-1)(-2)(-3) ); // 0
console.log( sum(0)(1)(2)(3)(4)(5) ); // 15