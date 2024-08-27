const addBtn = document.querySelector(".add-btn");
const addInput = document.getElementById("todo");
const todoBlocks = document.querySelector(".todo-blocks");

const checkIcon = `<img src="check.svg" width="21">`;
const delIcon = `<img src="close.svg" width="21">`;
const addIcon = `<img src="plus.svg" width="21">`;

if (localStorage.getItem("todos")) {
  todoBlocks.innerHTML = localStorage.getItem("todos");
}

function createTodoBlock() {
  const inpValue = addInput.value;
  console.log(inpValue);

  if (!inpValue) {
    return;
  }

  const todoBlock = document.createElement("div");
  todoBlock.className = "todo-block";
  todoBlocks.appendChild(todoBlock);

  // Создаем блок для значения и кнопки
  const todoBlockTask = document.createElement("div");
  todoBlockTask.classList = "todo-block-task";
  todoBlock.appendChild(todoBlockTask);

  const todoBlockValue = document.createElement("div");
  todoBlockValue.classList = "todo-block-value";
  todoBlockValue.textContent = inpValue;
  todoBlockTask.appendChild(todoBlockValue);

  // Создать кнопку Delete

  const bigDeleteBtn = document.createElement("button");
  bigDeleteBtn.classList = "big-del-btn";
  bigDeleteBtn.innerHTML = delIcon;
  bigDeleteBtn.dataset.action = "delete";
  todoBlockTask.appendChild(bigDeleteBtn);

  const addBlock = document.createElement("div");
  addBlock.className = "add-block";

  const addInputBlock = document.createElement("input");
  addInputBlock.type = "text";
  addInputBlock.className = "block-todo-input";
  addInputBlock.placeholder = "Add Task...";
  todoBlock.appendChild(addBlock);
  addBlock.appendChild(addInputBlock);

  const addBlockBtn = document.createElement("button");
  addBlockBtn.innerHTML = addIcon;
  addBlockBtn.className = "plus-btn";
  addBlockBtn.dataset.action = "add";
  addBlock.appendChild(addBlockBtn);

  // Создать блок для блока

  const secondBlock = document.createElement("div");
  secondBlock.className = "secondblock";
  todoBlock.appendChild(secondBlock);

  // Пишем функцию для кнопки в блоке

  addInput.value = "";
  saveToLocal();
}

addBtn.addEventListener("click", createTodoBlock);

function deleteTodoBlock(event) {
  if (event.target.dataset.action === "delete") {
    console.log("DELETE");
    const parentTodo = event.target.closest(".todo-block");
    parentTodo.remove();
    saveToLocal();
  }
}

todoBlocks.addEventListener("click", deleteTodoBlock);

function addSecondTodoBlock(event) {
  if (event.target.dataset.action === "add") {
    const secondInput = event.target
      .closest(".add-block")
      .querySelector(".block-todo-input");
    console.log(secondInput);
    // const secondInput = document.querySelector(".block-todo-input");
    const secondInputValue = secondInput.value;
    console.log(secondInputValue);

    if (!secondInputValue) {
      return;
    }

    const secondBlock = event.target
      .closest(".todo-block")
      .querySelector(".secondblock");
    console.log(secondBlock);

    // Создаем второй блок

    const secondTodoBlock = document.createElement("div");
    secondTodoBlock.className = "todo-block-block";

    const secondTodoBlockValue = document.createElement("div");
    secondTodoBlockValue.className = "todo-block-block-value";
    secondTodoBlockValue.textContent = secondInputValue;

    secondBlock.appendChild(secondTodoBlock);
    secondTodoBlock.appendChild(secondTodoBlockValue);

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = checkIcon;
    checkBtn.className = "check-btn";
    checkBtn.dataset.action = "check";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = delIcon;
    deleteBtn.className = "del-btn";
    deleteBtn.dataset.action = "remove";

    const btnBlock = document.createElement("div");
    btnBlock.className = "btn-block";

    secondTodoBlock.appendChild(btnBlock);

    btnBlock.appendChild(checkBtn);
    btnBlock.appendChild(deleteBtn);

    secondInput.value = "";
    saveToLocal();
  }
}

todoBlocks.addEventListener("click", addSecondTodoBlock);

function checkTodo(event) {
  if (event.target.dataset.action === "check") {
    const blockToToggle = event.target
      .closest(".todo-block-block")
      .querySelector(".todo-block-block-value");
    console.log(blockToToggle);

    blockToToggle.classList.toggle("checked");
    saveToLocal();
  }
}

todoBlocks.addEventListener("click", checkTodo);

function removeTodo(event) {
  if (event.target.dataset.action === "remove") {
    const blockToRemove = event.target.closest(".todo-block-block");
    const blockToRemoveFrom = event.target.closest(".secondblock");

    console.log(blockToRemove);
    console.log(blockToRemoveFrom);

    blockToRemoveFrom.removeChild(blockToRemove);
    saveToLocal();
  }
}

todoBlocks.addEventListener("click", removeTodo);

function saveToLocal() {
  todoHTML = todoBlocks.innerHTML;
  localStorage.setItem("todos", todoHTML);
}
