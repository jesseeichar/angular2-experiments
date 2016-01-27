import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {QueryDirectiveComponent} from './query-directive.component';

@Component({
    templateUrl: 'app/query/query-app.html',
    directives: [RouterLink, RouterOutlet]
})
@RouteConfig([
 { path: '/directive', name: 'DirectiveQuery', component: QueryDirectiveComponent, useAsDefault: true },
])
export class AngularQueryAppComponent {}