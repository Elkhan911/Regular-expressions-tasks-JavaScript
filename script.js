// let array1 = [1, 2, 3, 4, 5];
// let array2 = ["a", "b", "c", 1, 2, "d", "e", 4];
// let array3 = ["z", "b", "f", 9, 4, 1];

// function inArray(element, arr) {
//   for (let elem of arr) {
//     return arr.indexOf(element) !== -1;
//   }
// }
// console.log(inArray(2, array1));

// function getInt(arr1, arr2) {
//   let res = [];
//   for (let elem of arr1) {
//     if (inArray(elem, arr2)) {
//       res.push(elem);
//     }
//   }
//   return res;
// }
// console.log(getInt(array1, array2));

// function inArrays(element, arrs) {
//   for (let arr of arrs) {
//     return arrs.indexOf(element) !== -1;
//   }
// }

// console.log(inArrays(3, array1));

// function getInts(...arrays) {
//   let arr0 = arrays.shift();
//   let res = [];

//   for (let elem of arr0) {
//     if (inArrays(elem, arrays)) {
//       res.push(elem);
//     }
//   }
//   return res;
// }

// function inArrays(elem, arrs) {
//   for (let arr of arrs) {
//     if (!inArray(elem, arr)) {
//       return false;
//     }
//   }

//   return true;
// }

// function inArray(elem, arr) {
//   return arr.indexOf(elem) !== -1;
// }

// let res = getInts(array1, array2, array3);
// console.log(res);
