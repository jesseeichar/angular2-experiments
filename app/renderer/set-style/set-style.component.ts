import {Component, Renderer, AfterViewInit, ViewChild, ElementRef} from 'angular2/core';

@Component({
  templateUrl: 'app/renderer/set-style/set-style.component.html'
})
export class SetStyleComponent implements AfterViewInit {
  @ViewChild('set') el: ElementRef;

  constructor(private _renderer: Renderer){}
  ngAfterViewInit() {
    this._renderer.setElementStyle(this.el.nativeElement, "color", "red");
    this._renderer.setElementStyle(this.el.nativeElement, "border-style", "solid");
    this._renderer.setElementStyle(this.el.nativeElement, "border-width", "1px");
    this._renderer.setElementStyle(this.el.nativeElement, "border-color", "black");
  }
}