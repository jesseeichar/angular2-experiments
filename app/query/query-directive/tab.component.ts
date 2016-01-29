import {Component, QueryList, Query, AfterViewInit, OnInit} from 'angular2/core';
import {PaneComponent} from './pane.component';
@Component({
  selector: 'tabs',
  template: `
  <p>Number of Panes at init: {{numPanesAtInit}}</p>
  <p>Number of Panes after view init: {{numPanesAfterViewInit}}</p>
   <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li
            *ngFor="#pane of panes, #i=index"
            class="tab col s3"
            [class.active]="i == 0">
          <a href="#{{pane.id}}">{{pane.title}}</a>
        </li>
      </ul>
    </div>

   <ng-content></ng-content>
  </div>
`
})
export class TabComponent implements OnInit, AfterViewInit {
  numPanesAtInit: number;
  numPanesAfterViewInit: number;
  panes: QueryList<PaneComponent>;
  constructor(@Query(PaneComponent) panes:QueryList<PaneComponent>) {
    this.panes = panes;
  }

  ngOnInit() {
    this.numPanesAtInit = this.panes.length;
  }

  ngAfterViewInit() {
     $('ul.tabs').tabs();

     setTimeout(() => {this.numPanesAfterViewInit = this.panes.length});

  }
}
