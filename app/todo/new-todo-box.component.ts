import {Component} from 'angular2/core';
import {NewTodoComponent} from './new-todo.component';
import {Navigation} from '../navigation.service';

@Component({
  template: `
<div [style.display]="visible" class="col s12 m2 todo-box hoverable">
    <new-todo (onSave)="closeDialog()" (onCancel)="closeDialog()"></new-todo>
</div>
`,
styles: [
`
.todo-box {
  position: fixed;
  width: 30%;
  left: 68%;
  top: 80%;
  border-style: solid;
  border-color: rgb(0,0,0);
  border-width: 1px;
  background-color: rgb(255, 255, 255);
  padding: 5px;
}
`
],
  directives: [NewTodoComponent]
})
export class NewTodoBoxComponent {
  constructor(private _nav: Navigation) {}
  closeDialog() {
    this._nav.closeTodo();
  }
}