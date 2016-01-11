import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from 'angular2/core';
import {ProjectItem} from './project-item';

@Component({
    selector: 'project-item',
    template: `
        <a  class="collection-item" style="padding-left: .5em;"
            [ngStyle]="{display:showLink}"
            (click)="selectProject()"
            [class.active]="selectedProject == project">
            <i class="fa pull-left"
                [class.fa-chevron-down]="expanded && project.children.length > 0"
                [class.fa-chevron-right]="!expanded && project.children.length > 0"
                (click)="toggleExpanded()"></i>
            <span [style.margin-left]="project.children.length == 0 ? '1em' : undefined">{{project.name}}</span>
            <i class="fa fa-pencil pull-right" (click)="toggleEdit($event)"></i></a>
        <input [ngStyle]="{display:showInput}" style="padding-left:1.5em"
            [(ngModel)]="project.name" />
        <div class="collection" *ngIf="project.children.length > 0 && expanded"
            style="margin-left: 1em;border-right: 0px;border-bottom: 0px;">
            <project-item *ngFor="#child of project.children"
                    [project]="child"
                    [selectedProject]=selectedProject
                    (selected)="selected.next($event)"></project-item>
        </div>
    `,
    directives: [ProjectItemComponent]
})
export class ProjectItemComponent implements OnChanges  {
    @Input() public project: ProjectItem
    @Input() public selectedProject: ProjectItem
    @Output() selected = new EventEmitter();

    public showLink = "block";
    public showInput = "none";
    public expanded = false;

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        var change = changes['selectedProject'];
        var deselectThis = change && change.currentValue != this.project && this.showLink === 'none';
        if (deselectThis) {
            this.toggleEdit(null);
        }
    }

    selectProject() {
        this.selected.next(this.project);
    }

    toggleExpanded() {
        this.expanded = !this.expanded;
    }

    toggleEdit(event:any) {
        if (event == null || this.showLink === 'none') {
            this.showLink = "block";
            this.showInput = "none";
        } else {
            this.showLink = "none";
            this.showInput = "block";
        }
    }
}