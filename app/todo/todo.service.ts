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
  getDone(): Todo[] {
    return done;
  }
  newTodo(text: string): Todo {
     let todo = new Todo(new Date(), text);
     todos.push(todo);
     return todo;
  }
  toggleDone(todo: Todo) {
    var idx = todos.indexOf(todo);
    if (idx > -1) {
      todo.done = true;
      todos.splice(idx, 1);
      done.push(todo);
    } else {
      idx = done.indexOf(todo);
      if (idx > -1) {
        todo.done = false;
        done.splice(idx, 1);
        todos.push(todo)
      }
    }
  }
}

let todos: Todo[] = [
  new Todo(new Date(2000, 1, 21, 12, 15), "First Todo")
]
let done: Todo[] = [
  new Todo(new Date(2000, 1, 21, 12, 15), "Finished Todo", new Date(2000, 1, 21, 12, 15), true)
]