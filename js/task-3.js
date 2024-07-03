const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInput);

function handleInput(el) {
  spanEl.textContent = el.target.value.trim()
    ? el.target.value.trim()
    : "Anonymous";
}
