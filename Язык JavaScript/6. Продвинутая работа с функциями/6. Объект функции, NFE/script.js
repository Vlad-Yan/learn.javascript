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
  