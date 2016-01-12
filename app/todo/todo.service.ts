import {Injectable} from 'angular2/core';

export class Todo {
    public modified: Date;
    public done = false;
    constructor(public created: Date, public text: string, modified?: Date, done?: boolean) {
        this.text = text;
        this.modified = created;
        if (modified != undefined) {
            this.modified = modified;
        }
        this.created = created;
        if (done != undefined) {
            this.done = done;
        }
    }
}
@Injectable()
export class TodoService {
    getTodosCount(): number {
        return todos.length;
    }

    getTodos(): Todo[] {
        return todos;
    }
}

let todos: Todo[] = [
    new Todo(new Date(2000, 1, 21, 12, 15),"First Todo")
]