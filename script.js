let link = document.querySelector("#link");
let image = document.querySelector("#image");
let divSector = document.querySelector("#div-sector");
let www = document.querySelectorAll(".www");
let pTwo = document.querySelector("#pTwo");
let pThree = document.querySelector("#pThree");
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");
let allInputs = document.querySelectorAll(".inputs");
let allP = document.querySelectorAll(".newP");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let divParent = document.querySelector(".parent");
let pOne = document.querySelector("#pOne");
let parent = document.querySelector("#parent");

//
//************************************************************************* */
//                              VARIABLES
//************************************************************************* */
//

elem1.addEventListener("blur", func);

function func() {
  let str = elem1.value;

  if (str.includes(3)) {
    return true;
  }
  return false;
}
