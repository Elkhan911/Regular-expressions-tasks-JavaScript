function func1() {
  return new Date().getDate();
}

function func2() {
  return new Date().getMonth();
}

function func3() {
  return new Date().getFullYear();
}

let arr = [];

let [year = func3(), month = func2(), day = func1()] = arr;

console.log(year);
console.log(month);
console.log(day);
