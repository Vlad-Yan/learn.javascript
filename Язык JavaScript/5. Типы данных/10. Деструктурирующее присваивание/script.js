// 1. Деструктурирующее присваивание

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


// 2. Максимальная зарплата

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

  
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };