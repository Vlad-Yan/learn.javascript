// 1. Добавить функциям метод "f.defer(ms)"

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

function f() {
    alert("Hello!");
}
  
f.defer(1000); // выведет "Hello!" через 1 секунду


// 2. Добавьте функциям декорирующий метод "defer()

Function.prototype.defer = function(ms) {
    return (...args) => {
        setTimeout(this, ms, ...args);
    }; 
};
  
function f(a, b) {
    alert( a + b );
}
  
f.defer(1000)(1, 2); // выведет 3 через 1 секунду.