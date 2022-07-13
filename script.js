let pOne = document.querySelector("#pOne");
let pTwo = document.querySelector("#pTwo");
let pThree = document.querySelector("#pThree");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");

button1.addEventListener("click", function () {
  pOne.innerHTML = "<b>pOne.innerHTML</b>";
});

// pTwo.addEventListener("click", function () {
//   pTwo.innerHTML = "!" + pTwo.innerHTML;
// });

// pOne.addEventListener("click", function () {
//   pOne.innerHTML = Math.pow(pOne, 2);
// });

// button1.addEventListener("click", function () {
//   pOne.innerHTML = "<b>жирный текст</b>";
// });

// button3.addEventListener("click", function () {
//   console.log(pTwo.innerHTML);
// });

pTwo.addEventListener("click", function () {
  pTwo.innerHTML = "<i>hello</i>";
});
