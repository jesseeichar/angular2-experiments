import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {AddAttributeComponent} from './add-attribute/add-attribute.component';
import {SetStyleComponent} from './set-style/set-style.component';
import {AddElementComponent} from './add-element/add-element.component';
import {SelectRootComponent} from './select-root-element/select-root.component';
import {CreateTemplateAnchorComponent} from './create-template-anchor/create-template-anchor.component';
import {CreateViewRootComponent} from './create-view-root/create-view-root.component';

@Component({
  templateUrl: 'app/renderer/renderer-app.html',
      directives: [RouterLink, RouterOutlet]
})
@RouteConfig([
 { path: '/add-att', name: 'AddAttribute', component: AddAttributeComponent, useAsDefault: true },
 { path: '/set-style', name: 'SetStyle', component: SetStyleComponent },
 { path: '/add-element', name: 'AddElement', component: AddElementComponent },
 { path: '/select-root-element', name: 'SelectRootElement', component: SelectRootComponent },
 { path: '/create-template-anchor', name: 'CreateTemplateAnchor', component: CreateTemplateAnchorComponent },
 { path: '/create-view-root', name: 'CreateViewRoot', component: CreateViewRootComponent },
])
export class RendererAppComponent {}