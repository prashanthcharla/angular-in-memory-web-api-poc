import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { College } from 'src/app/models/college';
import { CollegeService } from 'src/app/services/functional/college.service';
import { UiCommonService } from 'src/app/services/ui-common.service';
import { CollegeCreateUpdateDailogBoxComponent } from './create-update-dailog-box/create-update-dailog-box.component';

@Component({
  selector: 'app-college-database',
  templateUrl: './college-database.component.html',
  styleUrls: ['./college-database.component.scss']
})
export class CollegeDatabaseComponent implements OnInit {

  title: string;
  subtitle: string;

  collegesList: Array<College>;

  studentDisplayColumns: string[];
  lecturerDispalyColumns: string[];

  subscriptions: Subscription;

  activePanel: number;

  loadingMessage$: Observable<string>;

  constructor(private collegeService: CollegeService,
    private uiCommonService: UiCommonService,
    public dialog: MatDialog) {
    this.title = "Welcome to the College Database";
    this.subtitle = "Explore & Manage";

    this.subscriptions = new Subscription();
    this.activePanel = -1;

    this.collegesList = new Array<College>();

    this.studentDisplayColumns = ["Id", "firstName", "lastName", "stream", "maxYearsInStream", "currentYear", "actions"];
    this.lecturerDispalyColumns = ["Id", "firstName", "lastName", "stream", "actions"];
  }

  ngOnInit(): void {
    this.loadingMessage$ = this.uiCommonService.loadingMessage$;
    this.collegeService.latestFilteredCollegesData$.subscribe(colleges => this.collegesList = colleges);
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

  // onUpdateClick() {
  //   this.openCreateOrUpdateDialog("update", student);
  // }

  onCreateClick() {
    this.openCreateOrUpdateDialog("save");
  }

  onUpdateClick() {
    this.openCreateOrUpdateDialog("update");
  }

  private openCreateOrUpdateDialog(action: string) {
    const dialogRef = this.dialog.open(CollegeCreateUpdateDailogBoxComponent, {
      data: { action: action },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
