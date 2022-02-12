import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { COLLEGE_LOADING_MESSAGE, ERROR_MESSAGE } from 'src/app/common/Constants';
import { College } from 'src/app/models/college';
import { UiCommonService } from '../ui-common.service';

@Injectable({
  providedIn: 'root'
})
export class CollegeService implements OnDestroy {

  private requestUrl: string;

  collegesData: BehaviorSubject<Array<College>>;
  collegesData$: Observable<Array<College>>;

  latestOpenedPanelId: Subject<number>;
  latestClosedPanelId: Subject<number>;

  private latestFilteredCollegesData: Subject<Array<College>>;
  latestFilteredCollegesData$: Observable<Array<College>>;

  isCollegeFormSubmitDisabled: BehaviorSubject<boolean>;

  currentActiveClgId: number;

  refreshCollegeData: Subject<boolean>;

  private subscriptions: Subscription;

  constructor(private _http: HttpClient,
    private uiCommonService: UiCommonService) {
    this.requestUrl = "api/college/";
    this.collegesData = new BehaviorSubject<Array<College>>([]);
    this.collegesData$ = this.collegesData.asObservable();
    this.latestClosedPanelId = new Subject<number>();
    this.latestOpenedPanelId = new Subject<number>();

    this.subscriptions = new Subscription();
    this.latestFilteredCollegesData = new Subject<Array<College>>();
    this.latestFilteredCollegesData$ = this.latestFilteredCollegesData.asObservable();
    this.isCollegeFormSubmitDisabled = new BehaviorSubject<boolean>(false);

    this.refreshCollegeData = new Subject<boolean>();

    this.subscriptions.add(
      this.latestOpenedPanelId.asObservable().subscribe(collegeId => this.currentActiveClgId = collegeId)
    );

    this.filterCollegeData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.collegesData.complete();
  }

  addCollege(college: College) {
    let response$ = this._http.post<College>(this.requestUrl, college);

    this.subscriptions.add(
      response$.subscribe(data => {
        this.isCollegeFormSubmitDisabled.next(false);
        data ? this.getAllCollegesDetails() : null;
      }, error => this.uiCommonService.loadingMessage.next(ERROR_MESSAGE))
    );
  }

  getAllCollegesDetails() {
    this.uiCommonService.loadingMessage.next(COLLEGE_LOADING_MESSAGE);
    let response$ = this._http.get<Array<College>>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => {
        this.collegesData.next(data);
        this.uiCommonService.loadingMessage.next('');
      }, error => this.uiCommonService.loadingMessage.next(ERROR_MESSAGE))
    );
  }

  updateCollegeDetails(id: number, college: College) {
    let response$ = this._http.put<College>(this.requestUrl + id, college);

    this.subscriptions.add(
      response$.subscribe(data => {
        this.isCollegeFormSubmitDisabled.next(false);
        this.getAllCollegesDetails();
      }, error => this.uiCommonService.loadingMessage.next(ERROR_MESSAGE))
    );
  }

  removeCollege(id: number) {
    let response$ = this._http.delete<College>(this.requestUrl + id);

    this.subscriptions.add(
      response$.subscribe(data => data ? this.getAllCollegesDetails() : null, error => this.uiCommonService.loadingMessage.next(ERROR_MESSAGE))
    );
  }

  filterCollegeData() {
    this.subscriptions.add(
      this.collegesData$.subscribe(data => {
        this.latestFilteredCollegesData.next(data);
        this.uiCommonService.load.next(false);
      })
    );
  }
}
