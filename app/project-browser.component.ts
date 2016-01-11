import {Component, OnInit} from 'angular2/core';
@Component({
    selector: 'project-browser',
    template: `
    <h2>Projects</h2>
    <md-checkbox>Please check me</md-checkbox>
  `
})
export class ProjectBrowserComponent implements OnInit {
    ngOnInit() {
    }
}