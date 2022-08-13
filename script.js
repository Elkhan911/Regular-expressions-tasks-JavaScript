let input1 = document.querySelector("#input1");
let taskAnswer11 = document.querySelector("#taskAnswer1");
let taskAnswer12 = document.querySelector("#taskAnswer2");

let inputLength = document.querySelector("#inputLength");
let inputWidth = document.querySelector("inputWidth");
let taskAnswer21 = document.querySelector("#taskAnswer21");
let taskAnswer22 = document.querySelector("#taskAnswer22");
let buttton1 = document.querySelector("#button1");

input1.addEventListener("blur", function () {
  //   if (Number(input1.value) !== "number") {
  //     alert("Нужно ввести число");
  //     input1.value = "";
  //   }
  //   if (Number(input1.value) == "number") {
  //     taskAnswer11.textContent =
  //       "Периметр квадрата:" + "  " + Number(input1.value) * 4;

  //     taskAnswer12.textContent =
  //       "Площадь квадрата:" + "  " + Number(input1.value) ** 2;
  //   }

  console.log(typeof Number(input1.value));
});
