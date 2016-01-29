import {Component, ContentChild, AfterViewInit, OnInit, Renderer, ElementRef, ViewResolver} from 'angular2/core';
import {ContentChildrenComponent} from './content-children.component';
import {ItemComponent} from '../item.component';

@Component({
  template: `
<content-children>

  <ul>
    <item [id]="'item 1'">Item 1</item>
    <item [id]="'item 2'">Item 2</item>
    <item [id]="'item 3'">Item 3</item>
    <item [id]="'item 4'">Item 4</item>
  </ul>

  <ul>
    <li id="listItem1 Id" #lookup>list item1</li>
    <li id="listItem2 Id" #lookup>list item2</li>
    <li id="listItem3 Id" #lookup>list item3</li>
    <li id="listItem4 Id" #lookup>list item4</li>
  </ul>

</content-children>
`,
  directives: [ContentChildrenComponent, ItemComponent]
})
export class ContentChildrenContainerComponent{}