const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const userData = {
    email: login.trim(),
    password: password.trim(),
  };

  form.reset();
  return console.log(userData);
}
