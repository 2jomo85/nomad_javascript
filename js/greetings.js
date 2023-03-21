// #login-form => id
// .login-form => Class
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// JavaScript에서 이벤트의 관한 정보를 첫번째 인자로 넘겨준다.
function onLoginSubmit(event) {
  // 브라우저의 기본동작을 막는 함수
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage 의 username 값을 확인.
if (savedUsername === null) {
  // show the form
  // 값이 없는 경우 로그인 폼이 보이고 submit 이벤트 등록
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}
