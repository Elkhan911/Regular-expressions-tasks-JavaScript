// *****************************************************************************
// ***********************   Регулярные выражения ******************************
// *****************************************************************************

//************************   Введение в регулярные выражения в JavaScript   *************************************

// 1. Дана строка:
// let str = 'ahb acb aeb aeeb adcb axeb';
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

let str1 = "ahb acb aeb aeeb adcb axeb";
let res1 = str1.replace(/a.b/g, "!");
console.log(res1);

// 2. Дана строка:
// let str = 'aba aca aea abba adca abea';
// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.

let str2 = "aba aca aea abba adca abea";
let res2 = str2.replace(/a..a/g, "!");
console.log(res2);

// 3. Дана строка:
// let str = 'aba aca aea abba adca abea';
// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.

let str3 = "aba aca aea abba adca abea";
let res3 = str3.replace(/ab.a/g, "!");
console.log(res3);

//********************   Операторы повторения символов в регулярках   **********************************************

// 4. Дана строка:
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону:
// буква 'a', буква 'b' любое количество раз, буква 'a'.

let str4 = "aa aba abba abbba abca abea";
let res4 = str4.replace(/ab+a/g, "!");
console.log(res4);
