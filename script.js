let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");
let link3 = document.querySelector("#link3");
let allLinks = document.querySelectorAll(".links");
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
let allPs = document.querySelectorAll(".newP");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let divParent = document.querySelector(".parent");
let pOne = document.querySelector("#pOne");
let parents = document.querySelector("#parent");
let divs = document.querySelectorAll(".divs");
let checkbox = document.querySelector("#checkbox");
let textarea = document.querySelector("#textarea");
let radios = document.querySelectorAll(".radiocl");
let select = document.querySelector("#select");
let serebroDiv = document.querySelector("#serebro");
let ParentNew = document.querySelector("#parents");
let ChildNew = ParentNew.querySelector(".child");
let allPsNew = document.querySelectorAll(".www");
let yesbatya = document.querySelector(".yesBatya");
let table = document.querySelector("#table");

//
//************************************************************************* */
//                              VARIABLES
//************************************************************************* */
//

let i = 1;

for (i = 1; i <= 4; i++) {
  let li = document.createElement("li");
  ParentNew.append(li);
  li.textContent = i;
  li.style.border = "1px solid blue";
}

button1.addEventListener("click", func1);

function func1() {
  let linew = document.createElement("li");
  ParentNew.append(linew);
  i++;
  linew.textContent = i - 1;
}

let lis = document.querySelectorAll("#parents li");

ParentNew.addEventListener("click", function (event) {
  console.log(event.target);

  if (event.target == "li") {
    this.remove();
  }
});
