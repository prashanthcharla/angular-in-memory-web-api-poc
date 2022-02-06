import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { Student } from 'src/app/models/student';
import { UiCommonService } from '../ui-common.service';
import { CollegeService } from './college.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnDestroy {

  private requestUrl: string;

  studentsData: BehaviorSubject<Array<Student>>;
  studentsData$: Observable<Array<Student>>;

  latestFilteredStudentData: Subject<Array<Student>>;
  isStudentFormSubmitDisabled: BehaviorSubject<boolean>;

  private subscriptions: Subscription;

  constructor(private _http: HttpClient,
    private collegeService: CollegeService,
    private uiCommonService: UiCommonService) {
    this.requestUrl = "api/student/";
    this.studentsData = new BehaviorSubject<Array<Student>>([]);
    this.studentsData$ = this.studentsData.asObservable();
    this.latestFilteredStudentData = new Subject<Array<Student>>();
    this.isStudentFormSubmitDisabled = new BehaviorSubject<boolean>(false);
    this.subscriptions = new Subscription();
    this.filterStudentData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.studentsData.complete();
  }

  addStudent(student: Student) {
    this.isStudentFormSubmitDisabled.next(true);
    let response$ = this._http.post<Student>(this.requestUrl, student);

    this.subscriptions.add(
      response$.subscribe(data => {
        this.isStudentFormSubmitDisabled.next(false);
        data ? this.getAllStudentsDetails() : null, error => console.log(error);
      })
    );
  }

  getAllStudentsDetails() {
    let response$ = this._http.get<Array<Student>>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => {
        console.log(data);
        this.studentsData.next(data), error => console.log(error);
      })
    );
  }

  updateStudentDetails(id: number, student: Student) {
    this.isStudentFormSubmitDisabled.next(true);
    let response$ = this._http.put<Student>(this.requestUrl + id, student);

    this.subscriptions.add(
      response$.subscribe(data => {
        this.isStudentFormSubmitDisabled.next(false);
        this.getAllStudentsDetails();
      })
    );
  }

  removeStudent(id: number) {
    let response$ = this._http.delete<Student>(this.requestUrl + id);

    this.subscriptions.add(
      response$.subscribe(data => this.getAllStudentsDetails())
    );
  }

  filterStudentData() {
    this.subscriptions.add(
      combineLatest(
        this.collegeService.latestOpenedPanelId.asObservable(),
        this.studentsData$,
        (collegeId, students) => {
          if(collegeId && students) {
            this.latestFilteredStudentData.next(students.filter(obj => obj.collegeId == collegeId));
            this.uiCommonService.load.next(false);
          }
        }
      ).subscribe()
    )
  }
}
