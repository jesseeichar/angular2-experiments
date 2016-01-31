import {Component, QueryList, Query, AfterViewInit, OnInit, ElementRef} from 'angular2/core';
import {PaneComponent} from './pane.component';
@Component({
  selector: 'tabs',
  templateUrl: 'app/query/query-directive/tab.html'
})
export class TabComponent implements OnInit, AfterViewInit {
  numPanesAtInit: number;
  numXPanesAtInit: number;
  numPanesAfterViewInit: number;
  numXPanesAfterViewInit: number;
  panes: QueryList<PaneComponent>;
  xpanes:QueryList<ElementRef>;
  constructor(
    @Query(PaneComponent) panes:QueryList<PaneComponent>,
    @Query('xpane') xpanes:QueryList<ElementRef>
    ) {
    this.panes = panes;
    this.xpanes = xpanes;
  }

  ngOnInit() {
    this.numPanesAtInit = this.panes.length;
    this.numXPanesAtInit = this.panes.length;
  }

  ngAfterViewInit() {
     $('ul.tabs').tabs();

     setTimeout(() => {
       this.numPanesAfterViewInit = this.panes.length;
       this.numXPanesAfterViewInit = this.xpanes.length;
      });

  }
}
