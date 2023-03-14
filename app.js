// #login-form => id
// .login-form => Class
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// JavaScript에서 이벤트의 관한 정보를 첫번째 인자로 넘겨준다.
function onLoginSubmit(event) {
  // 브라우저의 기본동작을 막는 함수
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  //greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  localStorage.setItem("username", username);
}

function handleLinkClick(event) {
  event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
