import {Component, Renderer} from 'angular2/core';

@Component({
  templateUrl: 'app/renderer/select-root-element/select-root.component.html'
})
export class SelectRootComponent {
  root:any;
  constructor(private _renderer: Renderer){}
  frame(selector?: string) {
    this.root = this._renderer.selectRootElement(selector);
  }
  reset() {
    this._renderer.setText(this.root, "This element will be selected and all children will be removed when button is pressed");
  }
}