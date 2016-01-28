import {Component, ViewChildren, AfterViewInit, OnInit} from 'angular2/core';
import {ItemComponent} from '../item.component';

@Component({
  templateUrl: '/app/query/view-child/view-child.html',
  directives: [ItemComponent]
})
export class ViewChildrenComponent implements AfterViewInit, OnInit{
  setAtInit: boolean;
  setAtAfterViewInitAndInit: boolean;
  @ViewChildren(ItemComponent) viewChild:ItemComponent = null;

  ngOnInit() {
    this.setAtInit = this.isSet();
  }
  ngAfterViewInit() {
    let setVal = this.isSet();
    console.log(this.isSet());
    //setTimeout( () => {this.setAtAfterViewInitAndInit = setVal});
  }

  isSet() {
    return this.viewChild != null &&  this.viewChild != undefined;
  }
}