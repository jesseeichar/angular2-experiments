import {Component, EventEmitter, Output} from 'angular2/core';
import {TodoService, Todo} from './todo.service';

@Component({
  selector: 'new-todo',
  template: `
      <div class="input-field col s12">
        <input id="new_todo"
            [(ngModel)]="text"
            (blur)="save()"
            (keyup)="saveIfEnter($event)"/>
        <label [class.active]="text" for="new_todo">New Todo</label>
      </div>
  `
})
export class NewTodoComponent {
  @Output() onSave = new EventEmitter()
  @Output() onCancel = new EventEmitter()
  public text="";
  constructor(private _todoService: TodoService) { }
  saveIfEnter(event: {keyCode:number}) {
    if (event.keyCode == 13) {
      this.save();
    }
    if (event.keyCode == 27) {
      this.clear();
    }
  }
  save() {
    if (this.text) {
      let newTodo = this._todoService.newTodo(this.text);
      this.text = "";
      this.onSave.emit(newTodo)
    }
  }

  clear() {
    this.onCancel.emit(this.text);
    this.text = "";
  }

}