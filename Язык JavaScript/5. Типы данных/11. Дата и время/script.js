// 1. Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

const date = new Date(2012, 1, 20, 3, 12);
alert(date);


// 2. Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"


// 3. День недели в европейской нумерации

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
      }
    return day;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2


// 4. Какой день месяца был много дней назад?

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// 5. Последнее число месяца?

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
  
alert( getLastDayOfMonth(2012, 1) ); // 29



// 6. Сколько сегодня прошло секунд?

function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

getSecondsToday()


// 7. Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
    let date = new Date();
    let passedSec = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    let daySec = 24*60*60;
    return daySec - passedSec;
}

getSecondsToTomorrow();


// 8. Форматирование относительной даты

