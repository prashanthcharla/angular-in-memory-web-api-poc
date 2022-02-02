import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { College } from 'src/app/models/college';

@Injectable({
  providedIn: 'root'
})
export class CollegeService implements OnDestroy {

  private requestUrl: string;

  collegesData: BehaviorSubject<Array<College>>;
  collegesData$: Observable<Array<College>>;

  private subscriptions: Subscription;

  constructor(private _http: HttpClient) {
    this.requestUrl = "api/college/";
    this.collegesData = new BehaviorSubject<Array<College>>([]);
    this.collegesData$ = this.collegesData.asObservable();

    this.subscriptions = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.collegesData.complete();
  }

  addCollege(college: College) {
    let response$ = this._http.post<College>(this.requestUrl, college);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllCollegesDetails() : null, error => console.log(error))
    );
  }

  getAllCollegesDetails() {
    let response$ = this._http.get<Array<College>>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => this.collegesData.next(data), error => console.log(error))
    );
  }

  updateCollegeDetails(id: number, college: College) {
    let response$ = this._http.put<College>(this.requestUrl + id, college);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllCollegesDetails() : null, error => console.log(error))
    );
  }

  removeCollege(id: number) {
    let response$ = this._http.delete<College>(this.requestUrl + id);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllCollegesDetails() : null, error => console.log(error))
    );
  }
}
