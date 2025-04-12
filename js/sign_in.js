// start global rule

let email = document.getElementById("signInEmail");
let password = document.getElementById("signInPassword");
let loginBtn = document.getElementById("loginbtn");
let incorrectMsg = document.getElementById("incorrectMsg");
let RequiedInputs = document.getElementById("RequiedInputs");

// end global rule
let username;

let users = [];
if (JSON.parse(localStorage.getItem("users")) != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

loginBtn.addEventListener("click", function () {
  if (email.value !== "" && password.value !== "") {
    if (isValidUser(email.value, password.value)) {
      window.location.href = "home.html";
      sessionStorage.setItem("n", username);
    } else {
      incorrectMsg.classList.remove("d-none");
      RequiedInputs.classList.add("d-none");
    }
  } else {
    RequiedInputs.classList.remove("d-none");
    incorrectMsg.classList.add("d-none");
  }
});

/* validation inputs */
function isValidUser(emailInput, passwordInput) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailInput && users[i].password === passwordInput) {
      username = users[i].name;
      return true;
    }
  }
  return false;
}
