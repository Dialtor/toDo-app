// import { todoList } from "..";

import { todoList } from "..";
import { Todo } from "./todo.class";


export class TodoList {
    constructor() {
        // this.toDoList = [];
        this.loadLocalStorage();
    }

    newToDo( toDo ) {
        this.toDoList.push(toDo);
        this.saveLocalStorage();
    }

    deleteToDo( id ) {
    this.toDoList = this.toDoList.filter( todo => todo.id != id);
    this.saveLocalStorage();
    }

    stateToDo( id ) {
        for( const toDo of this.toDoList) {
            // console.log(id, toDo.id)
            if (toDo.id == id) {
                toDo.toComplete = !toDo.toComplete;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteCompletedToDo() {
        this.toDoList = this.toDoList.filter( todo => !todo.toComplete);
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('toDo', JSON.stringify(this.toDoList))
    }

    checkCompleted() {
        return this.toDoList.filter(todo => !todo.toComplete).length;
    }



    loadLocalStorage() {

        localStorage.getItem('toDo')
        ? this.toDoList = JSON.parse(localStorage.getItem('toDo'))
        : this.toDoList = [];

        this.toDoList = this.toDoList.map( obj => Todo.fromJson(obj))
        // console.log('LocalCarge: ', this.toDoList);
        // console.log(typeof(this.toDoList))
    }
}