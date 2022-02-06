import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiCommonService {

  load: BehaviorSubject<boolean>;
  load$: Observable<boolean>;

  loadingMessage: BehaviorSubject<string>;
  loadingMessage$: Observable<string>;

  constructor() {
    this.load = new BehaviorSubject<boolean>(false);
    this.load$ = this.load.asObservable();

    this.loadingMessage = new BehaviorSubject<string>('');
    this.loadingMessage$ = this.loadingMessage.asObservable();
  }
}
