// 1.Работа с прототипами
// Ответ: 1) true, 2) null 3) undefined


// 2. Алгоритм поиска
// 1
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head

};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen)  // 3
console.log(bed.glasses)  // 1

// 2 Неважно, откуда берётся свойство – из объекта или из прототипа. 
// Движок запоминает, где было найдено свойство, и повторно используют его в следующем запросе.


// 3. Куда будет произведена запись?
// Ответ: rabbit


// 4. Почему наедаются оба хомяка?
// stomach - наследовался для обоих
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// Шустрый хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Живот ленивого хомяка пуст
alert( lazy.stomach ); // <ничего>
