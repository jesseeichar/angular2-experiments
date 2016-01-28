import {Component, ViewQuery, QueryList} from 'angular2/core';
import {ItemComponent} from '../item.component';

@Component({
  templateUrl: 'app/query/view-query/view-query.html',
  directives: [ItemComponent]
})
export class ViewQueryComponent {
  itemIds = [1,2,3,4,5]
  numberOfElements: number
  constructor(@ViewQuery(ItemComponent) private items:QueryList<ItemComponent>) {
    items.changes.subscribe(() => this.numberOfElements = items.length);
  }
  addItem() {
    this.itemIds.push(this.itemIds[this.itemIds.length - 1] + 1);
  }
}