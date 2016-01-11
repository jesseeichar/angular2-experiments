import {Component, OnInit} from 'angular2/core';
import {ProjectBrowserComponent} from './project-browser.component';

@Component({
    selector: 'project-app',
    template: `
      <h1>{{title}}</h1>

    <!-- Container #2 -->
    <div class="project-browser">
        <project-browser></project-browser>
    </div>
  `,
    directives: [ProjectBrowserComponent]
})
export class AppComponent implements OnInit {
    public title = "Project Manager";
    ngOnInit() {
    }
}