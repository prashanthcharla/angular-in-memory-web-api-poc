import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnDestroy {

  private requestUrl: string;

  studentsData: BehaviorSubject<Array<Student>>;
  studentsData$: Observable<Array<Student>>;

  private subscriptions: Subscription;

  constructor(private _http: HttpClient) {
    this.requestUrl = "api/student/";
    this.studentsData = new BehaviorSubject<Array<Student>>([]);
    this.studentsData$ = this.studentsData.asObservable();

    this.subscriptions = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.studentsData.complete();
  }

  addStudent(student: Student) {
    let response$ = this._http.post<Student>(this.requestUrl, student);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllStudentsDetails() : null, error => console.log(error))
    );
  }

  getAllStudentsDetails() {
    let response$ = this._http.get<Array<Student>>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => this.studentsData.next(data), error => console.log(error))
    );
  }

  updateStudentDetails(id: number, student: Student) {
    let response$ = this._http.put<Student>(this.requestUrl + id, student);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllStudentsDetails() : null, error => console.log(error))
    );
  }

  removeStudent(id: number) {
    let response$ = this._http.delete<Student>(this.requestUrl + id);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllStudentsDetails() : null, error => console.log(error))
    );
  }
}
