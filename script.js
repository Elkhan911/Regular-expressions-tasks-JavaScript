// *****************************************************************************
// ***********************   Регулярные выражения ******************************
// *****************************************************************************

//************************   Введение в регулярные выражения в JavaScript   *************************************

// 1. Дана строка:
// let str = 'ahb acb aeb aeeb adcb axeb';
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

let str1 = "ahb acb aeb aeeb adcb axeb";
let res1 = str1.match(/a.b/g, "!");
console.log(res1);

// 2. Дана строка:
// let str = 'aba aca aea abba adca abea';
// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.

let str2 = "aba aca aea abba adca abea";
let res2 = str2.match(/a..a/g, "!");
console.log(res2);

// 3. Дана строка:
// let str = 'aba aca aea abba adca abea';
// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.

let str3 = "aba aca aea abba adca abea";
let res3 = str3.match(/ab.a/g, "!");
console.log(res3);

//********************   Операторы повторения символов в регулярках   **********************************************

// 4. Дана строка:
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону:
// буква 'a', буква 'b' любое количество раз, буква 'a'.

let str4 = "aa aba abba abbba abca abea";
let res4 = str4.match(/ab+a/g, "!");
console.log(res4);

// 5. Дана строка:
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону:
// буква 'a', буква 'b' любое количество раз(в том числе 0 раз), буква 'a'.

let str5 = "aa aba abba abbba abca abea";
let res5 = str5.match(/ab*a/g);
console.log(res5);

// 6. Дана строка:
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aa', 'aba'
// по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.

let str6 = "aa aba abba abbba abca abea";
let res6 = str6.match(/ab?a/g);
console.log(res6);

// 7.Дана строка:
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.

let str7 = "aa aba abba abbba abca abea";
let res7 = str7.match(/ab*a/g);
console.log(res7);
