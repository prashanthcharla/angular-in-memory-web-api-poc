import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Stream } from 'src/app/models/stream';

@Injectable({
  providedIn: 'root'
})
export class StreamService implements OnDestroy {

  private requestUrl: string;

  streamsData: BehaviorSubject<Array<Stream>>;
  streamsData$: Observable<Array<Stream>>;

  subscriptions: Subscription;

  constructor(private _http: HttpClient) {
    this.requestUrl = "api/stream/";
    this.streamsData = new BehaviorSubject<Array<Stream>>([]);
    this.streamsData$ = this.streamsData.asObservable();

    this.subscriptions = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.streamsData.complete();
  }

  addStream(stream: Stream) {
    let response$ = this._http.post<Stream>(this.requestUrl, stream);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllStreamsDetails() : null, error => console.log(error))
    );
  }

  getAllStreamsDetails(caller?: string) {
    let response$ = this._http.get<Array<Stream>>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => this.streamsData.next(data), error => console.log(error))
    );
  }

  updateStreamDetails(id: number, stream: Stream) {
    let response$ = this._http.put<Stream>(this.requestUrl + id, stream);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllStreamsDetails() : null, error => console.log(error))
    );
  }

  removeStream(id: number) {
    let response$ = this._http.delete<Stream>(this.requestUrl + id);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllStreamsDetails() : null, error => console.log(error))
    );
  }
}