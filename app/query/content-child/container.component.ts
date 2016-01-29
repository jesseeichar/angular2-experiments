import {Component, ContentChild, AfterViewInit, OnInit, Renderer, ElementRef, ViewResolver} from 'angular2/core';
import {ContentChildComponent} from './content-child.component';
import {ItemComponent} from '../item.component';

@Component({
  template: `
<content-child>
  <item [id]="'the id'">The one single Item</item>
  <div id="Lookup element's id attribute'" #lookup>This element can be obtained based on the variable name</div>
</content-child>
`,
  directives: [ContentChildComponent, ItemComponent]
})
export class ContentChildContainerComponent{}