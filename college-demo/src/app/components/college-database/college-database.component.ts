import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { College } from 'src/app/models/college';
import { CollegeService } from 'src/app/services/functional/college.service';
import { UiCommonService } from 'src/app/services/ui-common.service';

@Component({
  selector: 'app-college-database',
  templateUrl: './college-database.component.html',
  styleUrls: ['./college-database.component.scss']
})
export class CollegeDatabaseComponent implements OnInit {

  title: string;
  subtitle: string;

  collegesList$: Observable<Array<College>>;

  studentDisplayColumns: string[];
  lecturerDispalyColumns: string[];

  subscriptions: Subscription;

  activePanel: number;

  loadingMessage$: Observable<string>;

  constructor(private collegeService: CollegeService, 
    private uiCommonService: UiCommonService) {
    this.title = "Welcome to the College Database";
    this.subtitle = "Explore & Manage";

    this.subscriptions = new Subscription();
    this.activePanel = -1;

    this.studentDisplayColumns = ["Id", "firstName", "lastName", "stream", "maxYearsInStream", "currentYear", "actions"];
    this.lecturerDispalyColumns = ["Id", "firstName", "lastName", "stream", "actions"];
  }

  ngOnInit(): void {
    this.loadingMessage$ = this.uiCommonService.loadingMessage$;
    this.collegesList$ = this.collegeService.collegesData$;
  }

  panelOpen(id: number, index: number) {
    this.activePanel = index;
    this.collegeService.latestOpenedPanelId.next(id);
  }

  panelClose(id: number, index: number) {
    this.collegeService.latestClosedPanelId.next(id);
  }

  isExpansionPanelExpanded(index: number) {
    return this.activePanel == index;
  }
}
