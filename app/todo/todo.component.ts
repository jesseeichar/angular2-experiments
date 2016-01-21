import {Component, Input} from 'angular2/core';
import {TodoService, Todo} from './todo.service';

@Component({
  selector: 'todo',
  template: `
    <li  (click)="toggleDone()" >
      <input type="checkbox" class="filled-in" id="todo-{{id}}"
        [checked]="todo.done"
       />
      <label for="test5">{{todo.text}}</label>
    </li>
  `
})
export class TodoComponent {
  static i = 0;
  public id = TodoComponent.i++;
  @Input() public todo: Todo;
  constructor(private _todoService: TodoService) { }
  toggleDone() {
    this._todoService.toggleDone(this.todo);
  }
}