// 1. Вычислить сумму чисел до данного
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// 1 С использованием цикла.
function sumTo(num) {
  let i = 0;
  let sum = 0;

  while (i<num) {
    i++;
    sum += i;
  }

  return sum;
}

console.log(sumTo(100000));

// 2 Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo(num) {
  if (num == 1) {
    return 1;
  } else {
    return num + sumTo(num - 1)
  }
}

console.log(sumTo(100));

// 3 С использованием формулы арифметической прогрессии.
function sumTo(num) {
  return (num * (num + 1)) / 2
}

console.log(sumTo(100));

// Какой вариант решения самый быстрый? Самый медленный? Почему?
// Самый быстрый механизм - 3,
// т.к. в нём нет циклов, 
// Затеем идёт 2 алгоритм,
// 3 алгоритм - самый медленный

// Максимальная глубина рекурсии ограничена движком JavaScript. 
// Точно можно рассчитывать на 10000 вложенных вызовов, 
// некоторые интерпретаторы допускают и больше, 
// но для большинства из них 100000 вызовов – за пределами возможностей


// 2. Вычислить факториал

function factorial(num) {
  return num == 1 ? 1 : num * factorial(num - 1);
}

console.log(factorial(5)); // 120


// 3. Числа Фибоначчи
// 1 Рекурсивный метод

function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

// 2 через цикл

function fib(n) {
  let num_1 = 1;
  let num_2 = 1;
  for (let i = 3; i <= n; i++) {
    let next = num_1 + num_2;
    num_1 = num_2;
    num_2 = next;
  }
  return num_2;
}

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
console.log( fib(77) ); // 5527939700884757


// 4. Вывод односвязного списка

// 1. Циклом

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);


// 2 Рекурсией

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

printList(list);

// Какой способ лучше?
// Способ с циклом эффективнее, не тратятся ресурсы для вложенных вызовов.
// Рекурсивный вариант более прост для понимания.


// 5.Вывод односвязного списка в обратном порядке

// 1. Циклом

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list);

// 2 рекурсией

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }
  alert(list.value);
}

printReverseList(list);