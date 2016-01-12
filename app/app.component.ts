import {Component} from 'angular2/core';
import {WelcomAppComponent} from './welcome.component'
import {NotesAppComponent} from './notes/notes-app.component'
import {ProjectAppComponent} from './project/project-app.component'
import {TodoAppComponent} from './todo/todo-app.component'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector: 'dev-app',
  template: `
      <nav>
        <div class="nav-wrapper">
            <a class="brand-logo">Dev Dashboard</a>
            <ul class="right hide-on-med-and-down">
                <li><a [routerLink]="['Welcome']">Welcome</a></li>
                <li><a [routerLink]="['NotesApp']">Notes</a></li>
                <li><a [routerLink]="['TodoApp']">Todos</a></li>
                <li><a [routerLink]="['ProjectsApp']">Projects</a></li>
            </ul>
        </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomAppComponent, useAsDefault: true },
  { path: '/notes/...',   name: 'NotesApp',     component: NotesAppComponent },
  { path: '/projects/...', name: 'ProjectsApp', component: ProjectAppComponent },
  { path: '/todos/...', name: 'TodoApp', component: TodoAppComponent }
])
export class AppComponent { }