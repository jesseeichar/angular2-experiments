import {Component, QueryList, Query, AfterViewInit} from 'angular2/core';
import {PaneComponent} from './pane.component';
@Component({
  selector: 'tabs',
  template: `
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
export class TabComponent implements AfterViewInit {
   panes: QueryList<PaneComponent>;
  constructor(@Query(PaneComponent) panes:QueryList<PaneComponent>) {
    this.panes = panes;
  }

  ngAfterViewInit() {
     $('ul.tabs').tabs();
  }
}
