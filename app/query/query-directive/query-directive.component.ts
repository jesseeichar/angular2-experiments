import {Component} from 'angular2/core';
import {PaneComponent} from './pane.component'
import {TabComponent} from './tab.component'

@Component({
  templateUrl: 'app/query/query-directive/query-directive.html',
  directives: [PaneComponent, TabComponent]
})
export class QueryDirectiveComponent {}
