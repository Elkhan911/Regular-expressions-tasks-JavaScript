//************************************************************************************************************** */
//******************************************** */ VARIABLES
//************************************************************************************************************** */

let input1 = document.querySelector("#input1");
let taskAnswer11 = document.querySelector("#taskAnswer1");
let taskAnswer12 = document.querySelector("#taskAnswer2");

let inputLength = document.querySelector("#inputLength");
let inputWidth = document.querySelector("#inputWidth");
let taskAnswer21 = document.querySelector("#taskAnswer21");
let taskAnswer22 = document.querySelector("#taskAnswer22");
let buttton1 = document.querySelector("#button1");

let input3 = document.querySelector("#input3");
let taskAnswer31 = document.querySelector("#taskAnswer31");

//************************************************************************************************************** */
//******************************************** */ FUNCTIONS
//************************************************************************************************************** */

input1.addEventListener("blur", function () {
  if (isNaN(input1.value)) {
    alert("Нужно ввести число");
    input1.value = "";
  }
  if (typeof Number(input1.value) == "number") {
    taskAnswer11.textContent =
      "Периметр квадрата:" + "  " + Number(input1.value) * 4;

    taskAnswer12.textContent =
      "Площадь квадрата:" + "  " + Number(input1.value) ** 2;
  }
});

buttton1.addEventListener("click", areaAndPerimeterRectangle);

function areaAndPerimeterRectangle() {
  if (isNaN(inputLength.value) || isNaN(inputWidth.value)) {
    alert("Нужно ввести число");
    input1.value = "";
  }
  if (
    typeof Number(inputLength.value) == "number" &&
    typeof Number(inputWidth.value) == "number"
  ) {
    taskAnswer21.textContent =
      "Периметр квадрата: " +
      (Number(inputLength.value) + Number(inputWidth.value)) * 2;
    taskAnswer22.textContent =
      "Площадь квадрата: " + inputLength.value * inputWidth.value;
  }
}

input3.addEventListener("blur", function () {
  taskAnswer31.textContent =
    "Площадь круга:  " + ((Number(input3.value) ** 2 / 4) * Math.PI).toFixed(2);
});
