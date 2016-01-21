import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {ProjectItem} from './project-item';
import {ProjectService} from './project.service';

@Component({
  selector: 'project-item',
  template: `
        <a  class="collection-item" style="padding-left: .5em;"
            [ngStyle]="{display:showLink}"
            (click)="selectProject()"
            [class.active]="selectedItem == item">
            <i class="fa pull-left"
                style="vertical-align: middle"
                [class.fa-chevron-down]="expanded && hasChildren(item)"
                [class.fa-chevron-right]="!expanded && hasChildren(item)"
                (click)="toggleExpanded()"></i>
            <span [style.margin-left]="!hasChildren(item) ? '1em' : undefined">{{item.name}}</span>
            <i class="fa fa-pencil pull-right" *ngIf="projectService.isFile(item)" (click)="edit(item)"></i></a>

        <div class="collection" *ngIf="hasChildren(item) && expanded"
            style="margin-left: 1em;border-right: 0px;border-bottom: 0px;">
            <project-item *ngFor="#child of getChildren(item)"
                    [item]="child"
                    [selectedItem]=selectedItem
                    (selected)="selected.next($event)"></project-item>
        </div>
    `,
  directives: [ProjectItemComponent]
})
export class ProjectItemComponent implements OnInit {
  @Input() public item: ProjectItem
  @Input() public selectedItem: ProjectItem
  @Output() selected = new EventEmitter();

  public expanded = false;

  constructor(private projectService: ProjectService, private router: Router, private routeParams: RouteParams) { }

  ngOnInit() {
    let path = this.routeParams.get('path')
    if (path) {
      path = this.projectService.decodePath(path);
      this.expanded = path.startsWith(this.item.path);
      if (path === this.item.path) {
        this.selectProject();
      }
    }
  }

  selectProject() {
    this.selected.emit(this.item);
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  edit(item: ProjectItem) {
    this.router.navigate(['FileBrowser', { path: this.projectService.encodePath(item) }])
  }
  getChildren(item: ProjectItem): ProjectItem[] {
    return this.projectService.getChildren(item);
  }
  hasChildren(item: ProjectItem): boolean {
    return !this.projectService.isFile(item) && this.projectService.numChildren(item) > 0;
  }
}