

export class Todo {

    static fromJson( {id,task,toComplete,toCreate} ) {
        const tempToDo = new Todo(task);

        tempToDo.id= id;
        tempToDo.task = task;
        tempToDo.toComplete = toComplete;
        tempToDo.toCreate = toCreate;

        return tempToDo;
    }

    constructor(task){
        this.task = task;
        this.id = new Date().getTime();
        this.toComplete = false;
        this.toCreate = new Date();
    }

    printClass() {
        console.log(`${this.task} - ${this.id}`)
    }


}