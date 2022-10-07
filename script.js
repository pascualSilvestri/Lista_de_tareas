import checkComplete from "./componentes/checkComplete.js";
import deleteBtn from "./componentes/deleteIcon.js";

const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');

const createTask = (e) => {
    e.preventDefault();
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = "";

    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    list.appendChild(task);
    task.appendChild(deleteBtn());
};

btn.addEventListener("click", createTask);


