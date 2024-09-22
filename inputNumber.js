const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const inputField = document.querySelector(".payment input");

minusBtn.addEventListener("click", () => {
  let currentValue = parseInt(inputField.value);
  if (currentValue > 1) {
    inputField.value = currentValue - 1;
  }
});

plusBtn.addEventListener("click", () => {
  let currentValue = parseInt(inputField.value);
  inputField.value = currentValue + 1;
});
