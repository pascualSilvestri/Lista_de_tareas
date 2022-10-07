
const deleteBtn = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask);
    return i;
};

const deleteTask = (event) => {
    const padre = event.target.parentElement;
    padre.remove();
};

export default deleteBtn;