// 1. Использование "this" в литерале объекта
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
// Ответ: произойдёт ошибка


// 2. Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read () {
    this.a = +prompt('Введите a:', 0);
    this.b = +prompt('Введите b:', 0);
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// 3. Цепь вызовов
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
