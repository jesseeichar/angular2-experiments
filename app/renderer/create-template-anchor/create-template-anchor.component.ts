import {Component, Renderer, AfterViewInit, ViewChild, ElementRef} from 'angular2/core';

@Component({
  templateUrl: 'app/renderer/create-template-anchor/create-template-anchor.component.html',
  styles: [`
  div[newAtt] {
    color: red;
  }
  `]
})
export class CreateTemplateAnchorComponent implements AfterViewInit {
  @ViewChild('add') el: ElementRef;
  numChildren = 0;
  private i = 1;

  ngAfterViewInit() {
    setTimeout(() => this.updateChildNodes());
  }
  constructor(private _renderer: Renderer){}
  addcomment() {
    let templateAnchor = this._renderer.createTemplateAnchor(this.el.nativeElement);
    templateAnchor.textContent = "This is the " + (this.i++) + "th comment added";
    this.updateChildNodes();
  }
  updateChildNodes() {
    this.numChildren = this.el.nativeElement.childNodes.length;
  }
}