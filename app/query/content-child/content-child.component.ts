import {Component, ContentChild, AfterViewInit, OnInit, Renderer, ElementRef, ViewResolver} from 'angular2/core';
import {ItemComponent} from '../item.component';
import {QueryResultsComponent} from '../query-results.component';
import {SingleState} from '../state';
import {ImportComponent, Card} from '../../common/exports'

@Component({
  selector: 'content-child',
  templateUrl: '/app/query/content-child/content-child.html',
  directives: [QueryResultsComponent, ImportComponent, Card]
})
export class ContentChildComponent implements AfterViewInit, OnInit{
  state : SingleState[] = [new SingleState(), new SingleState()]
   // don't reference this in templates because it is set during a tick
   // you have to do the hack we do in ngAfterViewInit to use the collection.
   // if this is referenced in template then during dev mode you will get an exception
  @ContentChild(ItemComponent) contentChild:ItemComponent;
  @ContentChild('lookup') contentChild2:ElementRef;


  ngOnInit() {
    this.state[0].onInit(this.contentChild);
    this.state[1].onInit({id: this.getId()});
  }
  getId() {
    return this.contentChild2 ? this.contentChild2.nativeElement.id : undefined;
  }
  ngAfterViewInit() {
    this.state[0].afterViewInit(this.contentChild);
    this.state[1].afterViewInit({id: this.getId()});
  }
}
