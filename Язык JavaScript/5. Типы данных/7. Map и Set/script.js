// 1. Фильтрация уникальных элементов массива
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
    return Array.from(new Set(arr));
}
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare,Krishna,:-O
  


// 2. Отфильтруйте анаграммы
//  Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
  
    return Object.values(obj);
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );


// 3. Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

 let map = new Map();

 map.set("name", "John");
 
 let keys = Array.from(map.keys());
 
 keys.push("more");
 
 alert(keys); // name, more
 