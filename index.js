let currentTodos = document.querySelector(".current");
let completedTodos = document.querySelector(".completed");

let currentBtn = document.querySelector("#currentBtn");
let completedBtn = document.querySelector("#completedBtn");

function showCurrent() {
  currentTodos.style.transform = "translate(0)";
  currentTodos.style.opacity = 1;
  completedTodos.style.transform = "translate(100%)";
  completedTodos.style.opacity = 0;
  currentBtn.style.color = "rgb(0, 225, 255)";
  completedBtn.style.color = "rgb(126, 126, 126)";
}
function showCompleted() {
  completedTodos.style.transform = "translate(0)";
  completedTodos.style.opacity = 1;
  currentTodos.style.transform = "translate(-100%)";
  currentTodos.style.opacity = 0;
  completedBtn.style.color = "rgb(255, 0, 255)";
  currentBtn.style.color = "rgb(126, 126, 126)";
}

let input = document.querySelector("input");
let plus = document.querySelector("#plus");

let emptyTodo = document.querySelector("#emptyTodo");
let emptyComp = document.querySelector("#emptyComp");

let currentNo = document.querySelector("#currentNo");
let completedNo = document.querySelector("#completedNo");

plus.addEventListener("click", addTodos);

let counter = 0;
let curTodoCount = 0;
let compCount = 0;

currentNo.innerText = curTodoCount;
completedNo.innerText = compCount;

//console.log(emptyTodo.innerHTML);

function addTodos() {
  if (currentTodos.children.length == 0) {
    counter = 0;
  }

  //emptyTodo.innerText = "";
  counter++;

  curTodoCount++;
  currentNo.innerText = curTodoCount;

  let newTodo = document.createElement("div");
  newTodo.setAttribute("class", "newTodo");
  currentTodos.appendChild(newTodo);
  newTodo.innerHTML = `
    <div id="deleteTodo"><i class="far fa-times-circle"></i></div>
    <div id="todoValue"><p>${input.value}</p></div>
    <div id="sendToCompleted"><i class="far fa-check-circle"></i></div>
  `;
  input.value = "";
  plus.style.opacity = 0;

  let deleteTodo = document.querySelectorAll("#deleteTodo");
  let sendToCompleted = document.querySelectorAll("#sendToCompleted");
  let todoValue = document.querySelectorAll("#todoValue");

  console.log("counter---" + counter);
  for (let i = 0; i < counter; i++) {
    deleteTodo[i].onclick = e => {
      console.log("counter---" + counter);
      curTodoCount--;
      currentNo.innerText = curTodoCount;

      console.log("todo deleted");
      let delt = e.target.closest(".newTodo");
      currentTodos.removeChild(delt);
      //del.style.display = "none";
      console.log("ccc--" + currentTodos.children.length);
    };
    todoValue[i].ondblclick = e => {
      todoValue[i].style.display = "none ";

      let inp = document.createElement("input");
      inp.setAttribute("id", "editInput");
      let add = e.target.closest(".newTodo");
      add.appendChild(inp);

      let s = add.children[2];
      s.style.display = "none ";

      inp.value = e.target.innerText;
      e.target.innerText = "";

      inp.onkeyup = e => {
        if (event.key == "Enter" && inp.value != "") {
          //e.target.innerText = inp.value;
          todoValue[i].children[0].innerText = inp.value;
          add.removeChild(inp);
          todoValue[i].style.display = "block";
          s.style.display = "block";
          console.log(add);
        }
      };
    };
  }
  for (let i = 0; i < currentTodos.children.length; i++) {
    sendToCompleted[i].onclick = e => {
      console.log("counter---" + counter);
      curTodoCount--;
      currentNo.innerText = curTodoCount;

      compCount++;
      completedNo.innerText = compCount;

      console.log("todo completed");
      let del = e.target.closest(".newTodo");
      del.children[2].innerHTML = "";
      del.removeChild(del.children[0]);

      let dv = document.createElement("div");
      dv.innerHTML =
        '<div id="deleteCompletedTodo"><i class="far fa-times-circle"></i></div>';
      del.prepend(dv);
      completedTodos.appendChild(del);
      console.log(del);

      del.children[0].onclick = () => {
        compCount--;
        completedNo.innerText = compCount;
        completedTodos.removeChild(del);
        console.log("ddd--" + completedTodos.children.length);
      };
      //del.style.display = "none";
    };
  }
}

//

if (input.value == "") {
  plus.style.opacity = 0;
}
input.onkeyup = () => {
  plus.style.opacity = 1;
  if (event.key == "Enter" && input.value != "") {
    addTodos();
  }
  if (input.value == "") {
    plus.style.opacity = 0;
  }
};
/*
if (currentTodos.innerHTML == "") {
  console.log(89);
  currentTodos.innerHTML = "<p id='emptyTodo'>No Todos <br/>Yet!</p>";
}

if (completedTodos.innerHTML == "") {
  console.log(89);
  completedTodos.innerHTML =
    "<p id='emptyComp'>Nothing Completed <br/>Yet!</p>";
}*/
