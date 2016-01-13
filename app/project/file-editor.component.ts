import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ProjectService} from './project.service';
import {File} from './project-item';

@Component({
  template: `
  <div *ngIf="!file">
    No file selected
  </div>
  <nav *ngIf="file">
    <div class="col s12">
      <a href="#!" class="breadcrumb">First</a>
      <a href="#!" class="breadcrumb">Second</a>
      <a href="#!" class="breadcrumb">Third</a>
      <i *ngIf="changed" class="fa fa-asterisk"></i>
    </div>
</nav>
        <textarea
          *ngIf="file"
          id="editor-{{file.name}}"
          class="materialize-textarea"
          [(ngModel)]="data"
          (click)="changed = true"></textarea>
`
})
export class FileEditorComponent implements OnInit {
  private path: string;
  public file: File;
  public data: string;
  public original: string;
  public changed: boolean = false;

  constructor(private routeParams: RouteParams, private projectService: ProjectService) { }

  ngOnInit() {
    this.path = this.routeParams.get('path')
    if (this.path) {
      this.path = this.projectService.decodePath(this.path);
      this.loadData();
    }
  }

  loadData() {
    this.file = this.projectService.getFile(this.path);
    this.data = null;
    if (this.file) {
      this.data = this.file.data;
    }
  }
}