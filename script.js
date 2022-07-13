let pOne = document.querySelector("#pOne");
let pTwo = document.querySelector("#pTwo");
let pThree = document.querySelector("#pThree");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");

pOne.addEventListener("click", function () {
  let res = pOne.innerHTML;
  pOne.innerHTML = Number(res) + 1;
});
