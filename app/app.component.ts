import {Component, OnInit} from 'angular2/core';
import {ProjectBrowserComponent} from './project-browser.component';

@Component({
    selector: 'project-app',
    template: `
    <nav>
        <div class="nav-wrapper">
        <a class="brand-logo">Project Manager</a>
        </div>
    </nav>
    <div class="row">
        <div class="col s4"><project-browser></project-browser></div>
        <div class="col s8">This div is 8-columns wide</div>
    </div>
  `,
    directives: [ProjectBrowserComponent]
})
export class AppComponent implements OnInit {
    ngOnInit() {
    }
}