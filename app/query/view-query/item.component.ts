import {Component} from 'angular2/core';

@Component({
  selector: 'item',
  template: '<li><strong><ng-content></ng-content></strong></li>'
})
export class ItemComponent {}