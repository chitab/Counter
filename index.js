const countValue = document.querySelector("h1");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const inputValue = document.getElementById("inputValue");
const reset = document.getElementById("reset");

increment.addEventListener("click", (e) => {
  e.preventDefault();
  countValue.textContent =
    parseInt(countValue.textContent) + parseInt(inputValue.value);
});
decrement.addEventListener("click", (e) => {
  e.preventDefault();
  if (countValue.textContent > 0) {
    countValue.textContent =
      parseInt(countValue.textContent) - parseInt(inputValue.value);
  }
});
inputValue.addEventListener("change", (e) => {
  e.preventDefault();
  const changeNumber = inputValue.valueAsNumber;
  inputValue.value = parseInt(changeNumber);
});
reset.addEventListener("click", () => {
  countValue.textContent = 0;
});
