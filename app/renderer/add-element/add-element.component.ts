import {Component, Renderer, AfterViewInit, ViewChild, ElementRef} from 'angular2/core';

@Component({
  templateUrl: 'app/renderer/add-element/add-element.component.html'
})
export class AddElementComponent implements AfterViewInit {
  @ViewChild('set') el: ElementRef;

  constructor(private _renderer: Renderer){}
  ngAfterViewInit() {
    let newEl = this._renderer.createElement(this.el.nativeElement, "div");
    this._renderer.setText(newEl, "This is the new element");
  }
}