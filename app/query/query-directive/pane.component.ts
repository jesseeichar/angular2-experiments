import {Component, Input} from 'angular2/core';

@Component({
  selector: 'pane',
  template: `
  <div [id]="id" class="col s12"><h1><ng-content></ng-content></h1></div>
`
})
export class PaneComponent {
  @Input() title: string;
  @Input() id: string;
}
