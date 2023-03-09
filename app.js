const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // const clickedClass = "active";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  // toggle 메소드를 통해 위 코드를 대체
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
