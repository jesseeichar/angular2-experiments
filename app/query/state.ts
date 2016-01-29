import {QueryList} from 'angular2/core'

export class MultiState {
  setAtInit: number;
  setAtAfterViewInitAndInit: number;

  itemsForTemplate: Array<{ id: string }>;

  onInit(list: Array<{ id: string }>) {
    this.setAtInit = this.numberOfFoundChildren(list);
  }

  afterViewInit(list: Array<{ id: string }>) {
    let setVal = this.numberOfFoundChildren(list);
    setTimeout( () => {
      this.setAtAfterViewInitAndInit = setVal;
      this.itemsForTemplate = list;
    });
  }

  numberOfFoundChildren(list: Array<{ id: string }>) {
    if (list != null &&  list != undefined) {
      return list.length;
    }
    return -1;
  }
}

export class SingleState {
  setAtInit: boolean;
  setAtAfterViewInitAndInit: boolean;
  childForTemplate: { id: string };

  onInit(cmp: { id: string }) {
    this.setAtInit = this.isSet(cmp);
  }
  afterViewInit(cmp: { id: string }) {
    let setVal = this.isSet(cmp);

    // need to do this so that angular doesn't complain
    setTimeout(() => {
      this.setAtAfterViewInitAndInit = setVal;
      this.childForTemplate = cmp;
    });
  }

  isSet(contentChild: any) {
    return contentChild != null && contentChild != undefined;
  }
}