import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Lecturer } from 'src/app/models/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  private requestUrl: string;

  lecturersData: BehaviorSubject<Array<Lecturer>>;
  lecturersData$: Observable<Array<Lecturer>>;

  private subscriptions: Subscription;

  constructor(private _http: HttpClient) {
    this.requestUrl = "api/lecturer/";
    this.lecturersData = new BehaviorSubject<Array<Lecturer>>([]);
    this.lecturersData$ = this.lecturersData.asObservable();

    this.subscriptions = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.lecturersData.complete();
  }

  addLecturer(lecturer: Lecturer) {
    let response$ = this._http.post<Lecturer>(this.requestUrl, lecturer);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllLecturerDetails() : null, error => console.log(error))
    );
  }

  getAllLecturerDetails() {
    let response$ = this._http.get<Array<Lecturer>>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => this.lecturersData.next(data), error => console.log(error))
    );
  }

  updateLecturerDetails(id: number, lecturer: Lecturer) {
    let response$ = this._http.put<Lecturer>(this.requestUrl + id, lecturer);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllLecturerDetails() : null, error => console.log(error))
    );
  }

  removeLecturer(id: number) {
    let response$ = this._http.delete<Lecturer>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllLecturerDetails() : null, error => console.log(error))
    );
  }
}
