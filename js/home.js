let data = document.getElementById("displayName");
let logoutBtn = document.getElementById("logoutbtn");
let username;

if (sessionStorage.getItem("n") != null) {
  username = sessionStorage.getItem("n");
}

let cartona = "";
cartona += ` <h1 class="text-capitalize">welcome ${username}</h1>`;
data.innerHTML = cartona;

logoutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
