const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODO_KEY = "todo";

let lastIndex = 0;
let arrTodoList = [];
let todoItemList = JSON.parse(localStorage.getItem(TODO_KEY));

if (todoItemList !== null) {
  // localStorage 에 저장된 todo 의 값이 null 이 아닌 경우 todoList 생성
  todoItemList.forEach(todo => {
    printTodoList(todo);
  });
}

// Todo List 에 신규 Todo Item 저장.
function saveToDoItem(newToDoItem) {
  arrTodoList.push(newToDoItem);
  localStorage.setItem(TODO_KEY, JSON.stringify(arrTodoList));
}

// Todo List 생성 Function
function printTodoList(todoMessage) {
  // 신규 Element 생성
  const newToDoItem = document.createElement("li");
  newToDoItem.innerText = todoMessage;
  todoList.appendChild(newToDoItem);

  // Delete Button 생성
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", onHandleDeleteButtonClick);
  newToDoItem.appendChild(deleteButton);
}

// 삭제버튼 클릭 이벤트
function onHandleDeleteButtonClick(event) {
  const delItem = event.target.parentElement;
  if (delItem) {
    delItem.remove();
  }
}

// Todo 입력 이벤트
function onTodoSubmit(event) {
  // Form의 submit 기본동작 자동 안하도록 호출.
  event.preventDefault();
  // ToDo 입력 데이터 저장 및 Input Element 초기화
  const newTodoMessage = todoInput.value;
  todoInput.value = "";
  lastIndex += 1;
  saveToDoItem(newTodoMessage);
  printTodoList(newTodoMessage);
}

todoForm.addEventListener("submit", onTodoSubmit);
