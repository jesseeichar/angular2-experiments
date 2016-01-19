import {Component, OnInit, AfterViewInit} from 'angular2/core';
import {RouteParams, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {ProjectService} from './project.service';
import {File} from './project-item';
import {DialogService} from '../dialogs/dialog.service';

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
    id="file-editor-{{id}}"
    class="materialize-textarea"
    [(ngModel)]="data"
    (keyup)="dataChanged($event)"
    ></textarea>
`
})
export class FileEditorComponent implements OnInit, CanDeactivate, AfterViewInit {
  private path: string;
  public file: File;
  public data: string;
  public original: string;
  public changed: boolean = false;
  public id = FileEditorComponent.nextId++;
  static nextId = 0;

  constructor(private routeParams: RouteParams, private projectService: ProjectService, private _dialogService: DialogService) { }

  ngOnInit() {
    this.path = this.routeParams.get('path')
    if (this.path) {
      this.path = this.projectService.decodePath(this.path);
      this.loadData();
    }
  }
  ngAfterViewInit() {
    $('#file-editor-' + this.id).trigger('autoresize');
    window.onkeydown = event => {
      console.log('Ctrl+S!');
      event.preventDefault();
    };
  }
  dataChanged(event: any) {
    if (!event.ctrlKey && (event.keyCode == 32 || event.keyCode > 49)) {
      this.changed = true;
    }
  }

  loadData() {
    this.file = this.projectService.getFile(this.path);
    this.data = null;
    if (this.file) {
      this.data = this.file.data;
    }
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.changed) {
      return true;
    }

    return this._dialogService.confirm(
      "Discard Changes",
      "Are you sure you want to navigate away from this page and lose changes?");
  }
}