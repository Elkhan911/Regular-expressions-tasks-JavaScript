let input1 = document.querySelector("#input1");
let taskAnswer1 = document.querySelector("#taskAnswer1");
let taskAnswer2 = document.querySelector("#taskAnswer2");

input1.addEventListener("blur", function () {
  taskAnswer1.textContent =
    "Периметр квадрата:" + "  " + Number(input1.value) * 4;

  taskAnswer2.textContent =
    "Площадь квадрата:" + "  " + Number(input1.value) ** 2;
});
