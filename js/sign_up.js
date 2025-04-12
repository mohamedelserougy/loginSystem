/*  start global rules */
let userName = document.getElementById("emailName");
let email = document.getElementById("signUpEmail");
let password = document.getElementById("signUpPassword");
let btnSignUp = document.getElementById("btnSignUp");
let success = document.getElementById("successWord");

let users = [];
/*  end global rules */

/* to read or retrive data */
if (JSON.parse(localStorage.getItem("users")) != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

/* to sign up */

btnSignUp.addEventListener("click", addUser);

/* create single user  */
function addUser() {
  if (
    validationName() &&
    validation(email, "mesEmail") &&
    validation(password, "mesPassword") &&
    isExist()
  ) {
    let singleUser = {
      name: userName.value,
      email: email.value,
      password: password.value,
    };

    /*  push single user to array and store in localStorage */
    users.push(singleUser);
    localStorage.setItem("users", JSON.stringify(users));

    success.classList.remove("d-none");
    clear();

    setTimeout(function () {
      window.location.href = "index.html";
    }, 1000);
  }
}

/* to clear inputs and make isvalidClass none */
function clear() {
  userName.value = null;
  email.value = null;
  password.value = null;

  email.classList.remove("is-valid");
  password.classList.remove("is-valid");
  userName.classList.remove("is-valid");
}

/* validation name */
function validationName() {
  let message = document.getElementById("mesuserName");

  if (userName.value !== "") {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    message.classList.add("d-none");

    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    message.classList.remove("d-none");

    return false;
  }
}

/* validation name and password */
function validation(element, msgID) {
  let text = element.value;
  let message = document.getElementById(msgID);
  let regex = {
    signUpPassword: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
    signUpEmail: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
  };

  if (regex[element.id].test(text)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    message.classList.add("d-none");

    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    message.classList.remove("d-none");

    return false;
  }
}

/* validation if email is exist or not  */
function isExist() {
  let message = document.getElementById("existMess");

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email.value) {
      message.classList.remove("d-none");
      return false;
    }
  }

  message.classList.add("d-none");
  return true;
}
