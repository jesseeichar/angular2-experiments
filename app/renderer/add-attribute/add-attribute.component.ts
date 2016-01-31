import {Component, Renderer, AfterViewInit, ViewChild, ElementRef} from 'angular2/core';

@Component({
  templateUrl: 'app/renderer/add-attribute/add-attribute.component.html',
  styles: [`
  div[newAtt] {
    color: red;
  }
  `]
})
export class AddAttributeComponent implements AfterViewInit {
  @ViewChild('add') el: ElementRef;

  constructor(private _renderer: Renderer){}
  ngAfterViewInit() {
    this._renderer.setElementAttribute(this.el.nativeElement, "newAtt", "");
  }
}