import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {QueryDirectiveComponent} from './query-directive/query-directive.component';
import {ViewQueryComponent} from './view-query/view-query.component';
import {ViewChildComponent} from './view-child/view-child.component';
import {ViewChildrenComponent} from './view-children/view-children.component';

@Component({
    templateUrl: 'app/query/query-app.html',
    directives: [RouterLink, RouterOutlet]
})
@RouteConfig([
 { path: '/directive', name: 'DirectiveQuery', component: QueryDirectiveComponent, useAsDefault: true },
 { path: '/viewquery', name: 'ViewQuery', component: ViewQueryComponent },
 { path: '/viewchild', name: 'ViewChildComponent', component: ViewChildComponent },
 { path: '/viewchildren', name: 'ViewChildrenComponent', component: ViewChildrenComponent },
])
export class AngularQueryAppComponent {}