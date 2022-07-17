let button3 = document.querySelector("#button3");
let link = document.querySelector("#link");
let submitButton = document.querySelector("#buttonSub");
let image = document.querySelector("#image");
let divSector = document.querySelector("#div-sector");
let www = document.querySelectorAll(".www");
let pTwo = document.querySelector("#pTwo");
let pThree = document.querySelector("#pThree");
let pOne = document.querySelector("#pOne");
let button1 = document.querySelector("#button1");
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let allInputs = document.querySelectorAll(".inputs");

//
//************************************************************************* */
//                              VARIABLES
//************************************************************************* */
//

let allP = document.querySelectorAll(".newP");

function addExclaimPoint() {
  console.log(this);
  //   this.innerHTML = this.innerHTML + "!";
}

for (let elem of allInputs) {
  elem.addEventListener("click", addExclaimPoint);
}
