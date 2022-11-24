// 1. Класс расширяет объект?

class Rabbit extends Object {
  constructor(name) {
    super();  // при наследовании необходимо вызывать 
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') );