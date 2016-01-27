import {Component} from 'angular2/core';
import {PaneComponent} from './query-directive/pane.component'
import {TabComponent} from './query-directive/tab.component'

@Component({
  templateUrl: 'app/query/query-directive.html',
  directives: [PaneComponent, TabComponent]
})
export class QueryDirectiveComponent {}
