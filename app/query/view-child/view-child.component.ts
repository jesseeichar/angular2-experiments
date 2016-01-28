import {Component, ViewChild, AfterViewInit, OnInit, Renderer, ElementRef, ViewResolver} from 'angular2/core';
import {ItemComponent} from '../item.component';

@Component({
  templateUrl: '/app/query/view-child/view-child.html',
  directives: [ItemComponent]
})
export class ViewChildComponent implements AfterViewInit, OnInit{
  setAtInit: boolean;
  setAtAfterViewInitAndInit: boolean;
  @ViewChild(ItemComponent) viewChild:ItemComponent;
  @ViewChild('toSetText') ref: ElementRef;

  constructor(private renderer: Renderer, private viewResolver: ViewResolver) {}

  ngOnInit() {
    this.setAtInit = this.isSet();
  }
  ngAfterViewInit() {
    let setVal = this.isSet();

    // need to do this so that angular doesn't complain
    setTimeout( () => {this.setAtAfterViewInitAndInit = setVal;});
  }

  isSet() {
    return this.viewChild != null &&  this.viewChild != undefined;
  }
}