import {Component, provide, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteDefinition} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {WelcomeAppComponent} from './welcome.component';
import {NotesAppComponent} from './notes/notes-app.component';
import {ProjectAppComponent} from './project/project-app.component';
import {TodoAppComponent} from './todo/todo-app.component';
import {NewTodoBoxComponent} from './todo/new-todo-box.component';
import {LocalStorageStore} from './store/local-storage.store';
import {ConfirmDialog} from './dialogs/confirm-dialog.component';
import {DialogService} from './dialogs/dialog.service';
import {TodoService} from './todo/todo.service';
import {EmptyApp} from './empty-app.component';
import {Navigation} from './navigation.service';
import {RxjsAppComponent} from './rxjs/rxjs-app.component';
import {AngularQueryAppComponent} from './query/query-app.component';
import {RendererAppComponent} from './renderer/renderer-app.component';

export let routeConfig : [RouteDefinition] = [
  { path: '/welcome', name: 'Welcome', component: WelcomeAppComponent, useAsDefault: true },
  { path: '/rxjs', name: 'Rxjs', component: RxjsAppComponent },
  { path: '/query/...', name: 'AngularQuery', component: AngularQueryAppComponent },
  { path: '/renderer/...', name: 'RendererApp', component: RendererAppComponent },
  { path: '/notes/...', name: 'NotesApp', component: NotesAppComponent },
  { path: '/projects/...', name: 'ProjectsApp', component: ProjectAppComponent },
  { path: '/todos/...', name: 'TodoApp', component: TodoAppComponent },
  { aux: '/newtodo', name: 'NewTodoBox', component: NewTodoBoxComponent },
  { aux: '/newtodo', name: 'EmptyApp', component: EmptyApp, useAsDefault: true }
];

@Component({
  selector: 'dev-app',
  templateUrl: 'app/app.html',
  directives: [ROUTER_DIRECTIVES, ConfirmDialog],
  providers: [provide("Store", {useClass: LocalStorageStore}), DialogService, TodoService, Navigation, HTTP_PROVIDERS]
})
@RouteConfig(routeConfig)
export class AppComponent implements OnInit {
  constructor(private _nav: Navigation) {}
  ngOnInit() {
    this._nav.init();
    $(".dropdown-button").dropdown( { hover: true } );
  }
  newTodo() {
    this._nav.newTodo();
  }
}
