import {Component, OnInit} from 'angular2/core';
import {Project, ProjectItem} from './project-item'
import {ProjectService} from './project.service';
import {ProjectItemComponent} from './project-item.component'
@Component({
    selector: 'project-browser',
    template: `
        <h5>Projects</h5>
        <div class="collection">
            <project-item *ngFor="#item of projects"
                      [item]="item"
                      [selectedItem]=selected
                      (selected)="selected = $event"></project-item>
        </div>
  `,
  directives: [ProjectItemComponent]
})
export class ProjectBrowserComponent implements OnInit {
    public projects: Project[];
    public selected: ProjectItem;
    constructor(public projectService:ProjectService) {}
    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }
}