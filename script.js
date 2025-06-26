const names = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassy = document.getElementById("confirm-password");
const form = document.getElementById("form");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const conpass_error = document.getElementById("c_password_error");

name_error.style.color = "red";
email_error.style.color = "red";
password_error.style.color = "red";
conpass_error.style.color = "red";

form.addEventListener("submit", (e) => {
  name_error.innerHTML = "";
  email_error.innerHTML = "";
  password_error.innerHTML = "";
  conpass_error.innerHTML = "";

  let email_check =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (names.value === "" || names.value == null) {
    e.preventDefault();
    name_error.innerHTML = " Name is required";
  }

  if (!email.value.match(email_check)) {
    e.preventDefault();
    email_error.innerHTML = " Valid Email is required";
  }
  const passy = password.value;
  if (passy <= 8) {
    e.preventDefault();
    password_error.innerHTML = "Password must be 8 characters and above";
    password_error.style.color = "red";
  }
  if (passy >= 20) {
    e.preventDefault();
    password_error.innerHTML = "Password cannot be more than 20";
    password_error.style.color = "red";
  }
  if (passy === "password") {
    e.preventDefault();
    password_error.innerHTML = "Password cannot be 20 characters";
    password_error.style.color = "red";
  }
  if (confirmPassy.value !== passy) {
    e.preventDefault();
    conpass_error.innerHTML = "Invalid, does not match";
    conpass_error.style.color = "red";
  }
});
