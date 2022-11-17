// 1. Связанная функция как метод
// Ответ: null.

// 2. Повторный bind
// Ответ: Вася.

// 3. Свойство функции после bind
// Ответ: undefined.
// Результатом работы bind является другой объект. У него уже нет свойства test.

// 4.Исправьте функцию, теряющую "this"
// Ошибка из-за того, что askPassword получает функции loginOk/loginFail без контекста.

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5. Использование частично применённой функции для логина
askPassword(user.login.bind(user, true), user.login.bind(user, false));
