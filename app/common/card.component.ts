import {Component, Input, Query, QueryList, ElementRef} from 'angular2/core';

@Component({
    selector: 'card',
    template: `
<div class="col s{{gridCount}}">
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{title}}</span>
            <ng-content></ng-content>
        </div>
    </div>
</div>
`
})
export class Card {
    @Input() gridCount: number;
    @Input() title: string;
    // title: ElementRef;

    // constructor(@Query("cardtitle") title: QueryList<ElementRef>) {
    //     this.title = title.first;
    // }
}