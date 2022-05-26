import './styles.css';
import nodes from './js/nodes';
import {createToDoHtml} from './js/components';
import  { TodoList } from './classes/todo-list.class';
nodes.header_container.style.background = `url(./assets/bg-desktop-light.jpg)`;
nodes.header_container.style.backgroundRepeat = 'no-repeat';
nodes.header_container.style.backgroundSize = 'cover';


export const todoList = new TodoList();
// const task = new Todo('Learn JS');
// todoList.newToDo(task);
// createToDoHtml(task);
todoList.toDoList.forEach(toDo => createToDoHtml(toDo))
// console.log(todoList)




  /*---------------- theme light and dark mode ------------------ */ 
const dayNight = document.querySelector(".day-night");
const main_contain = document.querySelector('.main-container');
const label = document.querySelectorAll('.label');
const task_list_container = document.querySelector('.section-task-list-container');
const view_container = document.querySelectorAll('.view');
const footer = document.querySelector('.footer');
const txtInput = document.querySelector('.new-todo');
const colorBtn = document.querySelector('.clear-completed');
// const dayNight = document.querySelector('.icon-day');

dayNight.addEventListener("click", () => {
    main_contain.classList.toggle("dark");
    txtInput.classList.toggle("dark");
    task_list_container.classList.toggle('dark');
    footer.classList.toggle('dark');
    colorBtn.classList.toggle('dark');
    // dayNight.style.backgroundImage = 'url(../src/assets/icon-moon.svg)';

    label.forEach(element => {
        element.classList.toggle('dark');
    });
    view_container.forEach(element => {
        element.classList.toggle('dark');
    });
    if (main_contain.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        nodes.header_container.style.background = `url(./assets/bg-desktop-dark.jpg)`;
        dayNight.style.backgroundImage = 'url(./assets/icon-sun.svg)';
        dayNight.style.backgroundRepeat = 'no-repeat';
        dayNight.style.backgroundPosition = 'center';
    }
    else {
        localStorage.setItem("theme", "light");
        nodes.header_container.style.background = `url(./assets/bg-desktop-light.jpg)`;
        dayNight.style.backgroundImage = 'url(./assets/icon-moon.svg)';
        dayNight.style.backgroundRepeat = 'no-repeat';
        dayNight.style.backgroundPosition = 'center';
    }
    // updateIcon();
})

function themeMode() {
    // checking if 'theme' key exists
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "light") {
            main_contain.classList.remove("dark");
            txtInput.classList.remove("dark");
            footer.classList.remove('dark');
            task_list_container.classList.remove('dark');
            colorBtn.classList.remove('dark');
            nodes.header_container.style.background = `url(./assets/bg-desktop-light.jpg)`;
            dayNight.style.background = 'url(./assets/icon-moon.svg)';
            dayNight.style.backgroundRepeat = 'no-repeat';
            dayNight.style.backgroundPosition = 'center';
            label.forEach(element => {
                element.classList.remove('dark');
            });
            view_container.forEach(element => {
                element.classList.remove('dark');
            });
        }
        else {
            main_contain.classList.add("dark");
            txtInput.classList.add("dark");
            footer.classList.add('dark');
            task_list_container.classList.add('dark');
            colorBtn.classList.add('dark');
            nodes.header_container.style.background = `url(./assets/bg-desktop-dark.jpg)`;
            dayNight.style.background = 'url(./assets/icon-sun.svg)';
            dayNight.style.backgroundRepeat = 'no-repeat';
            dayNight.style.backgroundPosition = 'center';
            label.forEach(element => {
                element.classList.add('dark');
            });
            view_container.forEach(element => {
                element.classList.add('dark');
            });
        }
    }
    // updateIcon();
}
themeMode();


