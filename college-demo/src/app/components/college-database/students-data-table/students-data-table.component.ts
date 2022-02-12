import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Stream } from 'src/app/models/stream';
import { Student } from 'src/app/models/student';
import { StreamService } from 'src/app/services/functional/stream.service';
import { StudentService } from 'src/app/services/functional/student.service';
import { UiCommonService } from 'src/app/services/ui-common.service';
import { DeletePromptDailogComponent } from '../delete-prompt-dailog/delete-prompt-dailog.component';
import { StudentCreateUpdateDailogBoxComponent } from './create-update-dailog-box/create-update-dailog-box.component';

@Component({
  selector: 'app-students-data-table',
  templateUrl: './students-data-table.component.html',
  styleUrls: ['./students-data-table.component.scss']
})
export class StudentsDataTableComponent implements OnInit, AfterViewInit {

  @Input() displayedColumns: string[];
  @Input() data: Student[];

  dataSource: MatTableDataSource<Student>;

  streamsData: Stream[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptions: Subscription;

  loadTable$: Observable<boolean>; 

  constructor(private streamService: StreamService, 
    private studentService: StudentService, 
    private uiCommonService: UiCommonService,
    public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Student>();
    this.streamsData = new Array<Stream>();
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.loadTable$ = this.uiCommonService.load$;

    this.subscriptions.add(
      this.streamService.streamsData$.subscribe(data => this.streamsData = data)
    );

    this.subscriptions.add(
      this.studentService.latestFilteredStudentData.asObservable().subscribe(data => {
        this.dataSource.data = data;
      })
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getStream(id: number): Stream {
    return this.streamsData.find(stream => stream.id === id);
  }

  onDeleteClick(student: Student) {
    this.openDeletePromptDailog(student);
  }

  onUpdateClick(student: Student) {
    this.openCreateOrUpdateDialog("update", student);
  }

  onCreateClick() {
    this.openCreateOrUpdateDialog("save");
  }

  private openCreateOrUpdateDialog(action: string, student?: Student) {
    const dialogRef = this.dialog.open(StudentCreateUpdateDailogBoxComponent, {
      data: { action: action, student: student },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private openDeletePromptDailog(student: Student) {
    const dialogRef = this.dialog.open(DeletePromptDailogComponent, {
      data: { caller: "student-table" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result?.event.toLowerCase() === "yes") {
        this.uiCommonService.load.next(true);
        this.studentService.removeStudent(student.id);
      }
    });
  }

}
