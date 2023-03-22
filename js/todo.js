const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODO_KEY = "todo";
const INDEX_KEY = "index";

let lastIndex = parseInt(localStorage.getItem(INDEX_KEY));
let arrTodoList = JSON.parse(localStorage.getItem(TODO_KEY));

console.log(lastIndex);
if (lastIndex === null || isNaN(lastIndex)) {
  lastIndex = -1;
  console.log(lastIndex);
} else {
  console.log(lastIndex);
}

if (arrTodoList !== null) {
  // localStorage 에 저장된 todo 의 값이 null 이 아닌 경우 todoList 생성
  arrTodoList.forEach(todo => {
    printTodoList(todo.message, todo.id);
  });
} else {
  arrTodoList = [];
}

// Todo List 에 신규 Todo Item 저장.
function saveToDoItem(newToDoItem) {
  lastIndex += 1;
  arrTodoList.push({ id: lastIndex, message: newToDoItem });
  localStorage.setItem(TODO_KEY, JSON.stringify(arrTodoList));
  localStorage.setItem(INDEX_KEY, JSON.stringify(lastIndex));
}

// Todo List 생성 Function
function printTodoList(todoMessage, todoID) {
  // 신규 Element 생성
  const newToDoItem = document.createElement("li");
  newToDoItem.innerText = todoMessage;
  newToDoItem.id = todoID;
  todoList.appendChild(newToDoItem);

  // Delete Button 생성
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.id = lastIndex;
  deleteButton.addEventListener("click", onHandleDeleteButtonClick);
  newToDoItem.appendChild(deleteButton);
}

// 삭제버튼 클릭 이벤트
function onHandleDeleteButtonClick(event) {
  const delItem = event.target.parentElement;
  if (delItem) {
    const delIndex = arrTodoList.findIndex(x => x.id === parseInt(delItem.id));
    if (delIndex > -1) {
      arrTodoList.splice(delIndex, 1);
    }
    delItem.remove();
    localStorage.setItem(TODO_KEY, JSON.stringify(arrTodoList));
  }
}

// Todo 입력 이벤트
function onTodoSubmit(event) {
  // Form의 submit 기본동작 자동 안하도록 호출.
  event.preventDefault();
  // ToDo 입력 데이터 저장 및 Input Element 초기화
  const newTodoMessage = todoInput.value;
  todoInput.value = "";
  saveToDoItem(newTodoMessage);
  printTodoList(newTodoMessage, lastIndex);
}

todoForm.addEventListener("submit", onTodoSubmit);
