import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {TodoService} from './todo.service';
import {TodoListComponent} from './todo-list.component';

@Component({
  template: `
    <h2>Todos</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', name: 'TodoList', component: TodoListComponent, useAsDefault: true }
])
export class TodoAppComponent {

}