import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {AddAttributeComponent} from './add-attribute/add-attribute.component';
@Component({
  templateUrl: 'app/renderer/renderer-app.html',
      directives: [RouterLink, RouterOutlet]
})
@RouteConfig([
 { path: '/add-att', name: 'AddAttribute', component: AddAttributeComponent, useAsDefault: true }
])
export class RendererAppComponent {}