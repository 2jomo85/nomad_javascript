// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const usename = loginInput.value;
  if (usename === "") {
    alert("Please write your name.");
  } else if (usename.length > 15) {
    alert("Your name is to long.");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
