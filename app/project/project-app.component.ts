import {Component, OnInit} from 'angular2/core';
import {ProjectsComponent} from './projects.component';
import {ProjectService} from './project.service';
import {FileEditorComponent} from './file-editor.component';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {TodoComponent} from '../todo/todo.component';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers: [ProjectService]
})
@RouteConfig([
  { path: '/browse', name: 'FileBrowser', component: ProjectsComponent, useAsDefault: true }
])
export class ProjectAppComponent {
}
