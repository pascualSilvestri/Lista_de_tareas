const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');

const createTask = (e)=>{
    e.preventDefault();
    console.log(input.value)
};

btn.addEventListener("click", createTask);

