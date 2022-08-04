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

let employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];


for (let employee of employees) {
  console.log(employee);

  let tr = document.createElement("tr");
  console.log(tr);
  console.log(table);
  table.append(tr);

  let td = document.createElement("td");
  console.log(td);
  tr.append(td);
}
