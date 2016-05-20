import {Page} from 'ionic-angular';

import { Observable } from 'rxjs';

import {Store} from '@ngrx/store';
import * as actions from './../../actions';

import {APP_PROVIDERS} from './../../store';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  // providers: [...APP_PROVIDERS]
})
export class Page1 {
  counter: Observable<number>;

  constructor(
    private store: Store<any>) {
    this.counter = store.select<number>('counter');
  }

  increment() {
    this.store.dispatch({
      type: actions.INCREMENT
    });
  }

  decrement() {
    this.store.dispatch({
      type: actions.DECREMENT
    });
  }
}
