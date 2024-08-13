const addBtn = document.querySelector(".add-btn");
const addInput = document.getElementById("todo");
const todoBlocks = document.querySelector(".todo-blocks");

const checkIcon = `<img src="check.svg" width="21">`;
const delIcon = `<img src="close.svg" width="21">`;
const addIcon = `<img src="plus.svg" width="21">`;

// Local Storage

// let todosList;

// const saveToLocal = () => {
//   todosList = todoBlocks.innerHTML;
//   localStorage.setItem("todos", todosList);
// };

const btnClick = () => {
  console.log("click");

  // Получить значение из формы
  const inpValue = addInput.value;
  console.log(inpValue);

  if (!inpValue) {
    return;
  }

  // Создать блок
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
  todoBlockTask.appendChild(bigDeleteBtn);

  // Вешаем событие на кнопку Delete
  bigDeleteBtn.addEventListener("click", () => {
    todoBlocks.removeChild(todoBlock);
  });

  //Создать инпут в блоке + Кнопку

  const addBlock = document.createElement("div");
  addBlock.className = "add-block";

  const addInputBlock = document.createElement("input");
  addInputBlock.type = "text";
  addInputBlock.className = "block-todo-input";
  addInputBlock.placeholder = "Add Task...";
  // todoBlock.appendChild(addInputBlock);
  todoBlock.appendChild(addBlock);
  addBlock.appendChild(addInputBlock);

  const addBlockBtn = document.createElement("button");
  addBlockBtn.innerHTML = addIcon;
  addBlockBtn.className = "plus-btn";
  addBlock.appendChild(addBlockBtn);

  // Создать блок для блока

  const secondBlock = document.createElement("div");
  secondBlock.className = "secondblock";

  // Пишем функцию для кнопки в блоке

  addInput.value = "";

  // saveToLocal();

  const blockBtnClick = () => {
    // Получаем значение из формы внутри блока
    const inpBlockValue = addInputBlock.value;
    console.log(inpBlockValue);
    todoBlock.appendChild(secondBlock);

    if (!inpBlockValue) {
      return;
    }

    // Создаем блок в блоке
    const todoBlockBlock = document.createElement("div");
    todoBlockBlock.className = "todo-block-block";

    // Создаем блок для value
    const todoBlockBlockValue = document.createElement("div");
    todoBlockBlockValue.className = "todo-block-block-value";
    todoBlockBlockValue.textContent = inpBlockValue;

    secondBlock.appendChild(todoBlockBlock);
    todoBlockBlock.appendChild(todoBlockBlockValue);

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = checkIcon;
    checkBtn.className = "check-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = delIcon;
    deleteBtn.className = "del-btn";

    const btnBlock = document.createElement("div");
    btnBlock.className = "btn-block";

    todoBlockBlock.appendChild(btnBlock);

    btnBlock.appendChild(checkBtn);
    btnBlock.appendChild(deleteBtn);

    addInputBlock.value = "";

    // saveToLocal();

    // Вешаем событие на кнопку delete

    deleteBtn.addEventListener("click", () => {
      secondBlock.removeChild(todoBlockBlock);
      // saveToLocal();
    });

    // Вешаем событие на кнопку check

    checkBtn.addEventListener("click", () => {
      if (todoBlockBlock.classList.contains("checked")) {
        todoBlockBlock.classList.remove("checked");
        // saveToLocal();
      } else {
        todoBlockBlock.classList.add("checked");
        // saveToLocal();
      }
    });
  };

  addBlockBtn.addEventListener("click", () => {
    blockBtnClick();
    // saveToLocal();
  });
};

addBtn.addEventListener("click", () => {
  btnClick();
  // saveToLocal();
});

// if (localStorage.getItem("todos")) {
//   todoBlocks.innerHTML = localStorage.getItem("todos");
// }
