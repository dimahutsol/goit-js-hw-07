function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const createButtonEl = document.querySelector("[data-create");
const destroyButtonEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let inputValue = 0;

inputEl.addEventListener("change", handleInput);
createButtonEl.addEventListener("click", handleCreateButton);
destroyButtonEl.addEventListener("click", destroyBoxes);

function handleInput(event) {
  inputValue = event.target.value;
  event.target.value = "";
}

function handleCreateButton(event) {
  if (+inputValue > 0 && +inputValue <= 100) {
    createBoxes(inputValue);
  }
  return;
}

function destroyBoxes(event) {
  boxesEl.innerHTML = "";
}

function createBoxes(amount) {
  boxesEl.innerHTML = "";
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    boxes.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`
    );
    size += 10;
  }

  boxesEl.insertAdjacentHTML("beforeend", boxes.join(" "));
}
