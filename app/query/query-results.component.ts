import {Component, Input} from 'angular2/core';
import {Card} from '../common/exports';

@Component({
  selector: 'query-results',
  templateUrl: 'app/query/query-results.html',
  directives: [Card]
})
export class QueryResultsComponent {
  @Input() typeName: string
  @Input() itemsForTemplate: any;
  @Input() isList: boolean;
  @Input() setAtInit: number;
  @Input() setAtAfterViewInitAndInit: number;
  @Input() gridCount: number = 12;
}