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

//********************   Группирующие скобки в регулярках JavaScript   **********************************************

// 8. Дана строка:
// let str = 'ab abab abab abababab abea';
// Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.

let str8 = "ab abab abab abababab abea";
let res8 = str8.match(/(ab)+/g);
console.log(res8);

//********************  Экранировка спецсимволов в регулярках JavaScript  *********************************************

// 9. Дана строка:
// let str = 'a.a aba aea';
// Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.

let str9 = "a.a aba aea";
let res9 = str9.match(/a\.a/g);
console.log(res9);

// 10.Дана строка:
// let str = '2+3 223 2223';
// Напишите регулярку, которая найдет строку '2+3', не захватив остальные.

let str10 = "2+3 223 2223";
let res10 = str10.match(/2\+3/g);
console.log(res10);

// 11. Дана строка:
// let str = '23 2+3 2++3 2+++3 345 567';
// Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3',
// не захватив остальные (+ может быть любое количество).

let str11 = "23 2+3 2++3 2+++3 345 567";
let res11 = str11.match(/2(\+)+3/g);
console.log(res11);

//  12. Дана строка:
// let str = '23 2+3 2++3 2+++3 445 677';
// Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.

let str12 = "23 2+3 2++3 2+++3 445 677";
let res12 = str12.match(/2(\+)*3/g);
console.log(res12);

// 13. Дана строка:
// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.

let str13 = "*+ *q+ *qq+ *qqq+ *qqq qqq+";
let res13 = str13.match(/\*q+\+/g);
console.log(res13);

// 14. Дана строка:
// let str = '[abc] {abc} abc (abc) [abc]';
// Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.

let str14 = "[abc] {abc} abc (abc) [abc]";
let res14 = str14.replace(/\[abc\]/g, "!");
console.log(res14);
