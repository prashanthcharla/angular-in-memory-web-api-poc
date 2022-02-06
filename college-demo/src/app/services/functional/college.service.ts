import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { COLLEGE_LOADING_MESSAGE } from 'src/app/common/Constants';
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

  currentActiveClgId: number;

  private subscriptions: Subscription;

  constructor(private _http: HttpClient, 
    private uiCommonService: UiCommonService) {
    this.requestUrl = "api/college/";
    this.collegesData = new BehaviorSubject<Array<College>>([]);
    this.collegesData$ = this.collegesData.asObservable();
    this.latestClosedPanelId = new Subject<number>();
    this.latestOpenedPanelId = new Subject<number>();

    this.subscriptions = new Subscription();

    this.subscriptions.add(
      this.latestOpenedPanelId.asObservable().subscribe(collegeId => this.currentActiveClgId = collegeId)
    );
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
    this.uiCommonService.loadingMessage.next(COLLEGE_LOADING_MESSAGE);
    let response$ = this._http.get<Array<College>>(this.requestUrl);

    this.subscriptions.add(
      response$.subscribe(data => {
        this.collegesData.next(data), error => console.log(error);
        this.uiCommonService.loadingMessage.next('');
      })
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
