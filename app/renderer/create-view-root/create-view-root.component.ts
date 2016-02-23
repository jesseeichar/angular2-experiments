import {Component, Renderer, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation} from 'angular2/core';
import {Card} from '../../common/exports';

@Component({
  templateUrl: 'app/renderer/create-view-root/create-view-root.component.html',
  styleUrls: ['node_modules/materialize-css/dist/css/materialize.css'],
  directives: [Card],
  encapsulation: ViewEncapsulation.Native,
})
export class CreateViewRootComponent {
  @ViewChild('add') addToEl: ElementRef;
  @ViewChild('move') moveAfterEl: ElementRef;
  rootsToMove: Array<any> = [];
  movedRoots: Array<any> = [];

  constructor(private _renderer: Renderer){}
  createView() {
    let view = this._renderer.createViewRoot(this.addToEl.nativeElement);
    this.rootsToMove.push(view);
    let p = this._renderer.createElement(view, "p");
    this._renderer.setText(p, "This is a newly added view");
  }
  moveViews() {
    if (this.rootsToMove.length > 0) {
      this._renderer.attachViewAfter(this.moveAfterEl.nativeElement, this.rootsToMove);
    }
    this.movedRoots = this.movedRoots.concat(this.rootsToMove);
    this.rootsToMove = [];
  }
  destroyViews() {
    if (this.rootsToMove.length > 0) {
      this._renderer.destroyView(this.addToEl.nativeElement, this.rootsToMove);
      this.rootsToMove = [];
    }
    if (this.movedRoots.length > 0) {
      this._renderer.destroyView(this.moveAfterEl.nativeElement, this.movedRoots);
      this.movedRoots = [];
    }
  }
}