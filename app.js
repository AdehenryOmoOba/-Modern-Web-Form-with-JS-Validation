const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const respond = document.querySelectorAll("label");

respond.forEach(function (respond) {
  respond.addEventListener("click", () => {
    respond.style.color = "#03a9f4";
    respond.style.top = "-2rem";
    respond.style.fontSize = "1.2rem";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // Get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const telephoneValue = telephone.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === "") {
    // show error and add error class
    setErrorFor(username, "Username cannot be blank!");
  } else {
    // add success class
    successMode(username);
  }
  if (emailValue === "") {
    // show error and add error class
    setErrorFor(email, "Email cannot be blank!");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid!");
  } else {
    // add success class
    successMode(email);
  }
  if (telephoneValue === "") {
    setErrorFor(telephone, "Phone number cannot be blank!");
  } else {
    successMode(telephone);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue == "password") {
    setErrorFor(password, "Password cannot be 'password'");
  } else if (passwordValue.length < 5) {
    setErrorFor(password, "Password cannot be less than 5 characters");
  } else {
    successMode(password);
  }
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm password cannot be blank");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Confirm password does not match");
  } else {
    successMode(confirmPassword);
  }
}

function setErrorFor(input, message) {
  const inputBox = input.parentElement; // form control
  const small = inputBox.querySelector("small");
  // add error message inside small
  small.innerText = message;
  // add error class
  inputBox.className = "input-box error";
}

function successMode(input) {
  const inputBox = input.parentElement; // form control
  inputBox.className = "input-box success";
}

function isEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
