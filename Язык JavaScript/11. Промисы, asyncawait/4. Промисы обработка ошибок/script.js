// 1. Ошибка в setTimeout
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// Ответ: нет, т.к. ошибка генерируется после выполнения кода => поэтому промис не обработает её