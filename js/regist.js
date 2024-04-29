const passwordInput = document.getElementById("password");
const passwordRepeatInput = document.getElementById("password_repeat");
const similarSpan = document.getElementById("similar");
const submitButton = document.getElementById("sumbit");

submitButton.disabled = true;

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    similarSpan.textContent = "Пароль должен быть длиной не менее 8 символов";
    similarSpan.style.color = "red";
    submitButton.disabled = true;
  } else if (passwordInput.value !== passwordRepeatInput.value) {
    similarSpan.textContent = "Пароли не совпадают";
    similarSpan.style.color = "red";
    submitButton.disabled = true;
  } else {
    similarSpan.textContent = "Пароли совпадают";
    similarSpan.style.color = "green";
    submitButton.disabled = false;
  }
});

passwordRepeatInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    similarSpan.textContent = "Пароль должен быть длиной не менее 8 символов";
    similarSpan.style.color = "red";
    submitButton.disabled = true;
  } else if (passwordInput.value !== passwordRepeatInput.value) {
    similarSpan.textContent = "Пароли не совпадают";
    similarSpan.style.color = "red";
    submitButton.disabled = true;
  } else {
    similarSpan.textContent = "Пароли совпадают";
    similarSpan.style.color = "green";
    submitButton.disabled = false;
  }
});