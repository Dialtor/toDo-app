import { Todo } from "../classes/todo.class";
import  { todoList } from '../index'
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo')
const deleteAllBtn = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters')
const allFilters = document.querySelectorAll('.filtro');
const toDoCount = document.querySelector('.todo-count');
const listToDo = document.documentElement.querySelector('.todo-list');
console.log(allFilters);


export const createToDoHtml = (todo) => {

    const htmlTodo = `  <li class="${(todo.toComplete) ? "completed" : ""}" data-id="${todo.id}">
                            <div class="view">
                                <input class="toggle" type="checkbox" ${(todo.toComplete) ? "checked" : ""}>
                                <label class="label">${todo.task}</label>
                                <button class="destroy"></button>
                            </div>
                            <input class="edit" value="Create a TodoMVC template">
                        </li>`

                        //HTML reference
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild)

    return div.firstElementChild;
}



const mutationObserver = new MutationObserver(function (mutations){
    mutations.forEach(function(mutations) {
        const taskCount = todoList.checkCompleted();
        toDoCount.innerHTML = `<strong>${taskCount}</strong> pendiente(s)`
    })
})

mutationObserver.observe(listToDo, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
})

//Events


//New Task
txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0) {
        const newTodo = new Todo(txtInput.value);
        todoList.newToDo(newTodo);
        console.log(newTodo);

        createToDoHtml(newTodo);
        txtInput.value = '';
        // console.log(todoList)
    }
})

//Identify elements
divTodoList.addEventListener('click', (event) => {
    // console.log('click')
    // console.log(event)

    const elementName = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id')
    // console.log(todoElement);
    // console.log(todoId)
    // console.log(elementName);

    if (elementName.includes('input')) { //Change task state
        todoList.stateToDo(todoId);
        todoElement.classList.toggle('completed');
    }else if (elementName.includes("button")) { //Delete task
        todoList.deleteToDo(todoId);
        divTodoList.removeChild(todoElement);
    }

    // console.log(todoList);
})

//Delete completed task
deleteAllBtn.addEventListener('click', () => {
    todoList.deleteCompletedToDo()
    // console.log(todoList);

    for (let i = divTodoList.children.length-1; i >= 0; i--) {

        const element = divTodoList.children[i];

        if (element.classList.contains('completed')) {
            divTodoList.removeChild(element);
        }

    }

    // console.log(todoList)
})

ulFilters.addEventListener('click', (event) => {
    const filter = event.target.text;

    if (!filter) {return;}
    allFilters.forEach(element => {
        element.classList.remove('selected');
    });
    event.target.classList.add('selected')

    for(const element of divTodoList.children){
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');

        switch(filter){
            case 'Pendientes':
                if (completed) {
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if (!completed) {
                    element.classList.add('hidden');
                }
            break;
        }
    }
})