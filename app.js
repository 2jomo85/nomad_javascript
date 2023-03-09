const h1 = document.querySelector('div.hello:first-child h1')

console.dir(h1)

function handleTitleClick() {
  h1.style.color = 'blue'
}

function handleMouseEnter() {
  h1.innerText = 'Mouse is here!'
}

function handleMouseLeave() {
  h1.innerText = 'Mouse is gone!'
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato'
}

function handleWindowCopy() {
  alert('copier')
}

function handleWindowOffline() {
  alert('SOS no WIFI')
}

function handleWindowOnline() {
  alert('ALL GOOD!!')
}

h1.addEventListener('click', handleTitleClick)
// Same title.onclick = handleTitleClick;
// removeEventListener 를 통해 이벤트를 제거할 수 있기 때문에 addEventListener 방식을 선호
h1.addEventListener('mouseenter', handleMouseEnter)
h1.addEventListener('mouseleave', handleMouseLeave)

window.addEventListener('resize', handleWindowResize)
window.addEventListener('copy', handleWindowCopy)
window.addEventListener('offline', handleWindowOffline)
window.addEventListener('online', handleWindowOnline)
