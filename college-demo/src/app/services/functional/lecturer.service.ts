import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { ERROR_MESSAGE } from 'src/app/common/Constants';
import { Lecturer } from 'src/app/models/lecturer';
import { UiCommonService } from '../ui-common.service';
import { CollegeService } from './college.service';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  private requestUrl: string;

  lecturersData: BehaviorSubject<Array<Lecturer>>;
  lecturersData$: Observable<Array<Lecturer>>;

  latestFiltredLecturerData: Subject<Array<Lecturer>>;
  isLecturerFormSubmitDisabled: BehaviorSubject<boolean>;

  private subscriptions: Subscription;

  constructor(private _http: HttpClient, 
    private collegeService: CollegeService,
    private uiCommonService: UiCommonService) {
    this.requestUrl = "api/lecturer/";
    this.lecturersData = new BehaviorSubject<Array<Lecturer>>([]);
    this.lecturersData$ = this.lecturersData.asObservable();
    this.latestFiltredLecturerData = new Subject<Array<Lecturer>>();
    this.subscriptions = new Subscription();
    this.isLecturerFormSubmitDisabled = new BehaviorSubject<boolean>(false);
    this.filterLecturerData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.lecturersData.complete();
  }

  addLecturer(lecturer: Lecturer) {
    this.isLecturerFormSubmitDisabled.next(true);
    let response$ = this._http.post<Lecturer>(this.requestUrl, lecturer);

    this.subscriptions.add(
      response$.subscribe(data => {
        this.isLecturerFormSubmitDisabled.next(false);
        data ? this.getAllLecturerDetails() : null
      }, error => this.uiCommonService.loadingMessage.next(ERROR_MESSAGE))
    );
  }

  getAllLecturerDetails() {
    let response$ = this._http.get<Array<Lecturer>>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => this.lecturersData.next(data), error => this.uiCommonService.loadingMessage.next(ERROR_MESSAGE))
    );
  }

  updateLecturerDetails(id: number, lecturer: Lecturer) {
    this.isLecturerFormSubmitDisabled.next(true);
    let response$ = this._http.put<Lecturer>(this.requestUrl + id, lecturer);

    this.subscriptions.add(
      response$.subscribe(data => {
        this.isLecturerFormSubmitDisabled.next(false);
        this.getAllLecturerDetails();
      }, error => this.uiCommonService.loadingMessage.next(ERROR_MESSAGE))
    );
  }

  removeLecturer(id: number) {
    let response$ = this._http.delete<Lecturer>(this.requestUrl + id);

    this.subscriptions.add(
      response$.subscribe(data => this.getAllLecturerDetails(), error => this.uiCommonService.loadingMessage.next(ERROR_MESSAGE))
    );
  }

  filterLecturerData() {
    this.subscriptions.add(
      combineLatest(
        this.collegeService.latestOpenedPanelId.asObservable(),
        this.lecturersData$,
        (collegeId, lecturers) => {
          this.latestFiltredLecturerData.next(lecturers.filter(obj => obj.collegeId == collegeId));
          this.uiCommonService.load.next(false);
        }
      ).subscribe()
    );
  }
}
