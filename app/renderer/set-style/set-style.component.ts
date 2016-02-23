import {Component, Renderer, AfterViewInit, ViewChild, ElementRef} from 'angular2/core';

@Component({
  templateUrl: 'app/renderer/set-style/set-style.component.html'
})
export class SetStyleComponent implements AfterViewInit {
  @ViewChild('set') el: ElementRef;
  on = false;
  constructor(private _renderer: Renderer){}
  ngAfterViewInit() {
    this.toggleStyle()
  }

  toggleStyle() {
    this.on = !this.on;
    var color = "black";
    var width = "0px";
    if (this.on) {
      color = "red";
      width = "1px";
    }
    this._renderer.setElementStyle(this.el.nativeElement, "color", color);
    this._renderer.setElementStyle(this.el.nativeElement, "border-style", "solid");
    this._renderer.setElementStyle(this.el.nativeElement, "border-width", width);
    this._renderer.setElementStyle(this.el.nativeElement, "border-color", "black");

  }
}