const clock = document.querySelector("div h2#clock");

function setClock() {
  const date = new Date();
  const hour = getFormat(date.getHours());
  const minute = getFormat(date.getMinutes());
  const second = getFormat(date.getSeconds());
  clock.innerText = `${hour}:${minute}:${second}`;
}

function getFormat(targetString) {
  return String(targetString).padStart(2, "0");
}

setClock();
setInterval(setClock, 1000);
