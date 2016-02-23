import {Component, OnInit, Input} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Component({
  selector: 'import-html',
  template: `
<div *ngIf="html"
  [ngClass]="elClass"
  [ngStyle]="elStyle" [innerHTML]="html"></div>
<div *ngIf="error" class="row error">
  <div class="col s12">Error Encountered:</div>
  <div class="col s12">Status: {{error.status}}, statusText: {{error.statusText}}</div>
  <div class="col s12">{{error.text()}}</div>
</div>
`
})
export class ImportComponent implements OnInit {
  @Input() elClass: string;
  @Input() elStyle: {};
  @Input() path: string;
  html: string;
  error: Response;
  constructor(private _http: Http) {}
  ngOnInit() {
    this._http.get(this.path).subscribe(
      data => this.html = data.text(),
      error => this.error = error);
  }
}