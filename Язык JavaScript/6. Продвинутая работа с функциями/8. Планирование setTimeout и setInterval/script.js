// 1. Вывод каждую секунду
// Используя setInterval.
function printNumbers(from, to) {
    let current = from;  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
printNumbers(4, 20);

// Используя рекурсивный setTimeout
function printNumbers(from, to) {
    let current = from;
    function work() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }
    work();
    let timerId = setInterval(go, 1000);
  }
  printNumbers(5, 10);


// 2. Что покажет setTimeout?
// В приведённом ниже коде запланирован вызов setTimeout, 
// а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
// Когда будет выполнена запланированная функция?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}

// Любой вызов setTimeout будет выполнен только после того, как текущий код завершится.
// Последним значением i будет: 100000000.

