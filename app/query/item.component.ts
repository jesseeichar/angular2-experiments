import {Component, Input} from 'angular2/core';

@Component({
  selector: 'item',
  template: `
<li>
  <span *ngIf="id != null">ID: '{{id}}' </span>
  <strong>
    <ng-content></ng-content>
  </strong>
</li>`
})
export class ItemComponent {
  @Input() id:string;
}