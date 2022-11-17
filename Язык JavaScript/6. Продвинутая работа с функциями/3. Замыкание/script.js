// 1. Независимы ли счётчики?
// Ответ: 0, 1 т.к. у них независимые внешние лексические окружения


// 2. Объект счётчика
// Ответ: Да, будет работать, выведет 1, 2, 1


// 3. Функция в if
// Ответ: ошибка, т.к. функция sayHi объявлена внутри if => она существует только внутри этого блока. Снаружи её нет.


// 4. Сумма с помощью замыканий

function sum(a) {
    return function(b) {
        return a + b;
    }
}
console.log(sum(1)(2))  // = 3
console.log(sum(5)(-1))  // = 4


// 5. Фильтрация с помощью функции

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
}
  
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

let arr_1 = [1, 2, 3, 4, 5, 6, 7];
console.log( arr_1.filter(inBetween(3, 6)) ); // 3,4,5,6
let arr_2 = [1, 2, 3, 4, 5, 6, 7];
console.log( arr_2.filter(inArray([1, 2, 10])) ); // 1,2


// 6.Сортировать по полю

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
  
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
users.sort(byField('name'));
users.forEach(user => alert(user.name)); // Ann, John, Pete
users.sort(byField('age'));
users.forEach(user => alert(user.name)); // Pete, Ann, John

  
// 7. Армия функций

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() { // функция shooter
        alert( j ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5