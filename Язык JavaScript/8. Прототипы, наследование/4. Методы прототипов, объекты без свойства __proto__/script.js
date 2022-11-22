// 1. Добавьте toString в словарь
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

// 2. Разница между вызовами

rabbit.sayHi();  // Rabbit
Rabbit.prototype.sayHi();  // undefined
Object.getPrototypeOf(rabbit).sayHi();  // undefined
rabbit.__proto__.sayHi();  // undefined