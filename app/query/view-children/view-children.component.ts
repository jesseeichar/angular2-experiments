import {Component, ViewChildren, QueryList, AfterViewInit, OnInit, ElementRef} from 'angular2/core';
import {ItemComponent} from '../item.component';
import {Card} from '../../common/exports';
import {MultiState} from '../state';
import {QueryResultsComponent} from '../query-results.component';

@Component({
  templateUrl: '/app/query/view-children/view-children.html',
  directives: [ItemComponent, Card, QueryResultsComponent]
})
export class ViewChildrenComponent implements AfterViewInit, OnInit {
  states = [new MultiState(), new MultiState()]
  // don't reference this in templates because it is set during a tick
  // you have to do the hack we do in ngAfterViewInit to use the collection.
  // if this is referenced in template then during dev mode you will get an exception
  @ViewChildren(ItemComponent) children: QueryList<ItemComponent>
  @ViewChildren('lookup') children2: QueryList<ElementRef>

  ngOnInit() {
    this.states[0].onInit(this.childrenToArray());
    this.states[1].onInit(this.children2Array());
  }
  ngAfterViewInit() {
    this.states[0].afterViewInit(this.childrenToArray());
    this.states[1].afterViewInit(this.children2Array());
  }
  childrenToArray() {
    if (this.children) {
      return this.children.toArray();
    }
    return [];
  }
  children2Array(): Array<{ id: string }> {
    if (this.children2) {
      return this.children2.map(ref => {
        return {id: ref.nativeElement.id}
      });
    }
    return [];
  }
}