import {Component} from 'angular2/core';
import {BehaviorSubjectExample} from './behavior-subject.component';
import {ObservableCreateExample} from './observable-timer-merge.component';

@Component({
    template: `
<h4>Behavior Subject</h4>
<behavior-subject></behavior-subject>

<h4>Observable Complete</h4>
<observable-create></observable-create>
`,
    directives: [BehaviorSubjectExample, ObservableCreateExample]
})
export class RxjsAppComponent {}