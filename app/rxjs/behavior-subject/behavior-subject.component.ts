import {Component, OnInit} from 'angular2/core';
import {Observable, BehaviorSubject} from 'rxjs/Rx';
import {Card} from '../../common/exports'

@Component({
    templateUrl: 'app/rxjs/behavior-subject/behavior-subject.html',
    directives: [Card]
})
export class BehaviorSubjectExample implements OnInit {
    arr = [1,2,3];
    ints: number[];
    filtered: number[];
    filtered2: number[];
    ngOnInit() {
        let filter = (arr: number[]) => {
            let xx = arr.filter(i => i % 3 == 0);
            return xx;
        };
        let src = new BehaviorSubject<number[]>(this.arr);

        src.subscribe(arr => {
            this.ints = arr
            this.filtered2 = filter(arr)
        });
        src.map(filter).subscribe(arr => this.filtered = arr);

        src.next(this.arr);

        var i = 4;
        setInterval(() => {
            if (this.arr.length > 10) {
                this.arr.splice(0, this.arr.length);
            }
            this.arr.push(i++);
            src.next(this.arr);
        }, 2000);
    }
}