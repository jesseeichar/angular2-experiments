import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {BehaviorSubjectExample} from './behavior-subject/behavior-subject.component';
import {ObservableCreateExample} from './observable-timer-merge/observable-timer-merge.component';

@Component({
    templateUrl: 'app/rxjs/rxjs-app.html',
    directives: [BehaviorSubjectExample, ObservableCreateExample, RouterLink, RouterOutlet]
})
@RouteConfig([
 { path: '/behave-subject', name: 'BehaviorSubjectExample', component: BehaviorSubjectExample, useAsDefault: true },
 { path: '/observable-timer-merge', name: 'ObservableCreateExample', component: ObservableCreateExample},
])
export class RxjsAppComponent {}