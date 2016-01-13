import {Component, OnInit} from 'angular2/core';
import {ProjectBrowserComponent} from './project-browser.component';
import {ProjectService} from './project.service';
import {FileEditorComponent} from './file-editor.component';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
  template: `
    <div class="row">
        <div class="col s4">
            <div class="card-panel"><project-browser></project-browser></div>
        </div>
        <div class="col s8">
            <div class="card-panel"><router-outlet></router-outlet></div>
        </div>
    </div>
  `,
  directives: [ProjectBrowserComponent, RouterOutlet],
  providers: [ProjectService]
})
@RouteConfig([
  { path: '/edit', name: 'FileEditor', component: FileEditorComponent, useAsDefault: true }
])
export class ProjectAppComponent {
}
