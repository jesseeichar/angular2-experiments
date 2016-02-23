import {Component, ViewChild, AfterViewInit, OnInit, Renderer, ElementRef, ViewResolver} from 'angular2/core';
import {ItemComponent} from '../item.component';
import {QueryResultsComponent} from '../query-results.component';
import {SingleState} from '../state';

@Component({
  templateUrl: '/app/query/view-child/view-child.html',
  directives: [ItemComponent, QueryResultsComponent]
})
export class ViewChildComponent implements AfterViewInit, OnInit{
  state : SingleState[] = [new SingleState(), new SingleState()]
   // don't reference this in templates because it is set during a tick
   // you have to do the hack we do in ngAfterViewInit to use the collection.
   // if this is referenced in template then during dev mode you will get an exception
  @ViewChild(ItemComponent) child:ItemComponent;
  @ViewChild('lookup') child2:ElementRef;

  ngOnInit() {
    this.state[0].onInit(this.child);
    this.state[1].onInit({id: this.getId()});
  }
  getId() {
    return this.child2 ? this.child2.nativeElement.id : undefined;
  }
  ngAfterViewInit() {
    this.state[0].afterViewInit(this.child);
    this.state[1].afterViewInit({id: this.getId()});
  }
}
