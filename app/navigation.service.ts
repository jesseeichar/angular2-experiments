import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {routeConfig} from './app.component';

@Injectable()
export class Navigation {
  private _currentLocation: string;
  constructor(private _router: Router) {}

  private indexOf(subject: string, toFind: string) {
    let i = subject.indexOf(toFind);
    return i == -1 ? Number.MAX_VALUE : i;
  }
  init() {
    this._router.subscribe(next => {
      let indexOfBracket = this.indexOf(next, '(');
      let indexOfSlash = this.indexOf(next, '/');

      var index = Math.min(indexOfBracket, indexOfSlash);
      index = Math.min(index, next.length);

      let prefix = next.substr(0, index);

      var matches = routeConfig.filter(rc => {
        return rc.path && rc.path.startsWith("/" + prefix)
      });
      this._currentLocation = matches[0].name  ? matches[0].name : matches[0].as;
    })
  }
  newTodo() {
    this._router.navigate([this._currentLocation, ['NewTodoBox']])
  }
  closeTodo() {
    this._router.navigate([this._currentLocation, ['EmptyApp']]).
      then(_ => this._router.navigate([this._currentLocation]));


  }
}