import {Component, provide, OnInit} from 'angular2/core';
import {WelcomeAppComponent} from './welcome.component';
import {NotesAppComponent} from './notes/notes-app.component';
import {ProjectAppComponent} from './project/project-app.component';
import {TodoAppComponent} from './todo/todo-app.component';
import {NewTodoBoxComponent} from './todo/new-todo-box.component';
import {RouteConfig, ROUTER_DIRECTIVES, RouteDefinition} from 'angular2/router';
import {LocalStorageStore} from './store/local-storage.store';
import {ConfirmDialog} from './dialogs/confirm-dialog.component';
import {DialogService} from './dialogs/dialog.service';
import {TodoService} from './todo/todo.service';
import {EmptyApp} from './empty-app.component';
import {Navigation} from './navigation.service';

export let routeConfig : [RouteDefinition] = [
  { path: '/welcome', name: 'Welcome', component: WelcomeAppComponent, useAsDefault: true },
  { path: '/notes/...', name: 'NotesApp', component: NotesAppComponent },
  { path: '/projects/...', name: 'ProjectsApp', component: ProjectAppComponent },
  { path: '/todos/...', name: 'TodoApp', component: TodoAppComponent },
  { aux: '/newtodo', name: 'NewTodoBox', component: NewTodoBoxComponent },
  { aux: '/newtodo', name: 'EmptyApp', component: EmptyApp, useAsDefault: true }
];

@Component({
  selector: 'dev-app',
  template: `
      <router-outlet name="newtodo"></router-outlet>
      <nav style="padding-left:5px">
        <div class="nav-wrapper">
            <a class="brand-logo">Dev Dashboard</a>
            <ul class="right hide-on-med-and-down">
                <li><a (click)="newTodo()">New Todo</a></li>
                <li><a [routerLink]="['Welcome']">Welcome</a></li>
                <li><a [routerLink]="['NotesApp']">Notes</a></li>
                <li><a [routerLink]="['TodoApp']">Todos</a></li>
                <li><a [routerLink]="['ProjectsApp']">Projects</a></li>
            </ul>
        </div>
    </nav>
    <router-outlet></router-outlet>
    <confirm-dialog-modal></confirm-dialog-modal>
  `,
  directives: [ROUTER_DIRECTIVES, ConfirmDialog],
  providers: [provide("Store", {useClass: LocalStorageStore}), DialogService, TodoService, Navigation]
})
@RouteConfig(routeConfig)
export class AppComponent implements OnInit {
  constructor(private _nav: Navigation) {}
  ngOnInit() {
    this._nav.init();
  }
  newTodo() {
    this._nav.newTodo();
  }
}
