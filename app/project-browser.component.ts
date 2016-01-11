import {Component, OnInit} from 'angular2/core';
import {ProjectItem} from './project-item'
import {ProjectItemComponent} from './project-item.component'
@Component({
    selector: 'project-browser',
    template: `
    <div class="card-panel">
        <h5>Projects</h5>
        <div class="collection">
            <project-item *ngFor="#project of projects"
                      [project]="project"
                      [selectedProject]=selected
                      (selected)="selected = $event"></project-item>
        </div>
    </div>
  `,
  directives: [ProjectItemComponent]
})
export class ProjectBrowserComponent implements OnInit {
    public projects: ProjectItem[] = [
        {name: "Project1", children: []},
        {name: "Project2", children: [
            {name: "Project21", children: []},
            {name: "Project22", children: []},
            {name: "Project23", children: [
                {name: "Project231", children: []},
                {name: "Project232", children: []},
                {name: "Project232", children: []},
            ]},
        ]},
        {name: "Project3", children: []},
        {name: "Project4", children: []},
    ]
    public selected: ProjectItem;
    ngOnInit() {
    }
}