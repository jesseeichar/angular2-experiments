import {Component, OnInit} from 'angular2/core';
import {Observable, Subscriber} from 'rxjs/Rx';
import {Card} from '../common/exports'

@Component({
    selector: 'observable-timer-merge',
    templateUrl: 'app/rxjs/observable-timer-merge.html',
    directives: [Card]
})
export class ObservableCreateExample implements OnInit {
    arr = [1,2,3];
    modValue = 0;
    ints: number[];
    filtered: number[];
    filtered2: number[];

    ngOnInit() {
        let filter = (arr: number[], modVal: number) => {
            let xx = arr.filter(i => i % modVal == 0);
            return xx;
        };

        var i = 4;
        let src: Observable<number[]> = Observable.timer(10, 1000).map(_ => {
          if (this.arr.length > 10) {
                this.arr.splice(0, this.arr.length);
            }
            this.arr.push(i++);
          return this.arr
        });

        let filterSrc: Observable<number> = Observable.timer(10, 500).map(_ => {
          return ((i - 1) % 4) + 1;
        });

        Observable.merge<any>(src, filterSrc).subscribe(next => {
          if (!(next instanceof Array)) {
            this.modValue = next;
          }
          this.filtered = filter(this.arr, this.modValue);
        })

        src.subscribe(arr => {
            this.ints = arr
            this.filtered2 = filter(arr, 3)
        });

    }
}