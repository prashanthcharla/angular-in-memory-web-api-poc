import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Lecturer } from 'src/app/models/lecturer';
import { Stream } from 'src/app/models/stream';
import { LecturerService } from 'src/app/services/functional/lecturer.service';
import { StreamService } from 'src/app/services/functional/stream.service';
import { UiCommonService } from 'src/app/services/ui-common.service';
import { DeletePromptDailogComponent } from '../delete-prompt-dailog/delete-prompt-dailog.component';
import { LecturerCreateUpdateDailogBoxComponent } from './create-update-dailog-box/create-update-dailog-box.component';

@Component({
  selector: 'app-lecturers-data-table',
  templateUrl: './lecturers-data-table.component.html',
  styleUrls: ['./lecturers-data-table.component.scss']
})
export class LecturersDataTableComponent implements OnInit, AfterViewInit {

  @Input() displayedColumns: string[];

  dataSource: MatTableDataSource<Lecturer>;
  subcriptions: Subscription;
  streamsData: Stream[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  loadTable$: Observable<boolean>; 

  constructor(private lecturerService: LecturerService,
    private streamService: StreamService,
    private uiCommonService: UiCommonService,
    public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Lecturer>();
    this.subcriptions = new Subscription();
    this.streamsData = new Array<Stream>();
  }

  ngOnInit(): void {
    this.loadTable$ = this.uiCommonService.load$;

    this.subcriptions.add(
      this.streamService.streamsData$.subscribe(data => this.streamsData = data)
    );

    this.subcriptions.add(
      this.lecturerService.latestFiltredLecturerData.subscribe(data => this.dataSource.data = data)
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getStream(id: number): Stream {
    return this.streamsData.find(stream => stream.id === id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(LecturerCreateUpdateDailogBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDeleteClick(lecturer: Lecturer) {
    this.openDeletePromptDailog(lecturer);
  }

  onUpdateClick(lecturer: Lecturer) {
    this.openCreateOrUpdateDialog("update", lecturer);
  }

  onCreateClick() {
    this.openCreateOrUpdateDialog("save");
  }

  private openCreateOrUpdateDialog(action: string, lecturer?: Lecturer) {
    const dialogRef = this.dialog.open(LecturerCreateUpdateDailogBoxComponent, {
      data: { action: action, lecturer: lecturer },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private openDeletePromptDailog(lecturer: Lecturer) {
    const dialogRef = this.dialog.open(DeletePromptDailogComponent, {
      width: "32em",
      data: { caller: "lecturer-table" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event.toLowerCase() === "yes") {
        this.uiCommonService.load.next(true);
        this.lecturerService.removeLecturer(lecturer.id);
      }
    });
  }
}
