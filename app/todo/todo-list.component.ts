import {Component, OnInit} from 'angular2/core';
import {TodoService, Todo} from './todo.service';
import {TodoComponent} from './todo.component'
import {NewTodoComponent} from './new-todo.component'

@Component({
  templateUrl: './app/todo/todo-list.component.html',
    directives: [TodoComponent, NewTodoComponent],
    styles: [
      `
      .todo-list {
        margin-left: 2em;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      `
    ]
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];
  public done: Todo[];
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.done = this.todoService.getDone();

    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
}