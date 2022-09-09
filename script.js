// Дана строка:
// let str = 'ahb acb aeb aeeb adcb axeb';
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

let str1 = "ahb acb aeb aeeb adcb axeb";
let a = str1.replace(/a.b/g, "!");
console.log(a);

// Дана строка:
// let str = 'aba aca aea abba adca abea';
// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.

let str2 = "aba aca aea abba adca abea";
let b = str2.replace(/a..a/g, "!");
console.log(b);

// Дана строка:
// let str = 'aba aca aea abba adca abea';
// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.

let str3 = "aba aca aea abba adca abea";
let c = str3.replace(/ab.a/g, "!");
console.log(c);
