import {Component, OnInit} from 'angular2/core';
import {ProjectBrowserComponent} from './project-browser.component';
import {ProjectService} from './project.service';
import {FileEditorComponent} from './file-editor.component';

@Component({
  template: `
    <div class="row">
        <div class="col s4">
            <div class="card-panel"><project-browser></project-browser></div>
        </div>
        <div class="col s8">
            <div class="card-panel"><file-editor></file-editor></div>
        </div>
    </div>
  `,
  directives: [ProjectBrowserComponent, FileEditorComponent],
  providers: [ProjectService]
})
export class ProjectsComponent {
}
