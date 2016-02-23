import {Component, ContentChildren, QueryList, AfterViewInit, OnInit, ElementRef} from 'angular2/core';
import {ItemComponent} from '../item.component';
import {MultiState} from '../state';
import {QueryResultsComponent} from '../query-results.component';
import {ImportComponent, Card} from '../../common/exports'

@Component({
  selector: 'content-children',
  templateUrl: '/app/query/content-children/content-children.html',
  directives: [QueryResultsComponent, Card, ImportComponent]
})
export class ContentChildrenComponent implements AfterViewInit, OnInit {
  states = [new MultiState(), new MultiState()]
  // don't reference this in templates because it is set during a tick
  // you have to do the hack we do in ngAfterContentInit to use the collection.
  // if this is referenced in template then during dev mode you will get an exception
  @ContentChildren(ItemComponent) children: QueryList<ItemComponent>
  @ContentChildren('lookup') children2: QueryList<ElementRef>

  ngOnInit() {
    this.states[0].onInit(this.childrenToArray());
    this.states[1].onInit(this.children2Array());
  }
  ngAfterViewInit() {
    this.states[0].afterViewInit(this.childrenToArray());
    this.states[1].afterViewInit(this.children2Array());
  }

  children2Array(): Array<{ id: string }> {
    if (this.children2) {
      return this.children2.map(ref => {
        return {id: ref.nativeElement.id}
      });
    }
    return [];
  }
  childrenToArray() {
    if (this.children) {
      return this.children.toArray();
    }
    return [];
  }
}