import {Component, ContentChild, AfterViewInit, Renderer, ElementRef} from 'angular2/core';

@Component({
  template: `
<div>
    This component has a single div.  A reference to the parent element of this div (the reference to the component)
    is injected into the constructor of this component.  Using this reference along with the <a href="/renderer">Renderer API</a>
    it is possible to interact with the native element.  In this example the reference and the Renderer are used to modify the style of this
    element.
</div>
<a class="waves-effect waves-light btn" (click)="updateStyle()">Use Rendere and Style to toggle a custom style</a>
`
})
export class InjectComponentElementRefComponent {
  styleOn = false;
  constructor(private _ref: ElementRef, private _renderer: Renderer) { }
  updateStyle () {
    let div = this._ref.nativeElement.getElementsByTagName("div")[0];
    this._renderer.setElementClass(div, "card-panel", !this.styleOn);
    this._renderer.setElementClass(div, "light-blue", !this.styleOn);
    this._renderer.setElementClass(div, "lighten-4", !this.styleOn);
    this.styleOn = !this.styleOn;
  }
}