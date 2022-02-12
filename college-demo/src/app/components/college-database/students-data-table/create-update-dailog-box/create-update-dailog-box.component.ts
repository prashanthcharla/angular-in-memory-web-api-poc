import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { SAVE_BTN_LABEL, STUDENT_CREATE_FORM_HEADER, STUDENT_UPDATE_FORM_HEADER, UPDATE_BTN_LABEL } from 'src/app/common/Constants';
import { Stream } from 'src/app/models/stream';
import { Student } from 'src/app/models/student';
import { CollegeService } from 'src/app/services/functional/college.service';
import { StreamService } from 'src/app/services/functional/stream.service';
import { StudentService } from 'src/app/services/functional/student.service';
import { UiCommonService } from 'src/app/services/ui-common.service';

@Component({
  selector: 'app-student-create-update-dailog-box',
  templateUrl: './create-update-dailog-box.component.html',
  styleUrls: ['./create-update-dailog-box.component.scss']
})
export class StudentCreateUpdateDailogBoxComponent implements OnInit {

  studentForm: FormGroup;
  streamDropdownValues: Stream[];
  currentStreamYearDropdownValues: number[];
  subscriptions: Subscription;
  disableSave$: Observable<boolean>;
  action: string;
  title: string;
  submitBtnLabel: string;

  constructor(private studentervice: StudentService,
    private streamService: StreamService,
    private collegeService: CollegeService,
    private formBuilder: FormBuilder,
    private uiCommonService: UiCommonService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { action: string, student: Student },
    public dialogRef: MatDialogRef<StudentCreateUpdateDailogBoxComponent>) {
    this.streamDropdownValues = new Array<Stream>();
    this.currentStreamYearDropdownValues = new Array<number>();
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.dialogRef.updateSize("27%");
    this.action = this.data.action.toLowerCase();

    this.studentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      stream: ['', Validators.required],
      currentYear: ['', Validators.required]
    });

    if (this.action === "save") {
      this.title = STUDENT_CREATE_FORM_HEADER;
      this.submitBtnLabel = SAVE_BTN_LABEL;
    } else if (this.action === "update") {
      this.title = STUDENT_UPDATE_FORM_HEADER;
      this.submitBtnLabel = UPDATE_BTN_LABEL;
      this.studentForm.get('firstName').setValue(this.data.student.firstName);
      this.studentForm.get('lastName').setValue(this.data.student.lastName);
      this.studentForm.get('stream').setValue(this.data.student.streamId);
      this.studentForm.get('currentYear').setValue(this.data.student.currStreamYear);
    }

    this.disableSave$ = this.studentervice.isStudentFormSubmitDisabled.asObservable();

    this.subscriptions.add(
      this.streamService.streamsData$.subscribe(data => {
        this.streamDropdownValues = data;
        this.currentStreamYearDropdownValues = [...Array.from({ length: Math.max(...data.map(obj => obj.noOfYears)) }, (_, i) => i + 1)];
      })
    );
  }

  updateCurrentYearDropdown() {
    let maxYears = this.streamDropdownValues.find(stream => stream.id === this.studentForm.get("stream").value).noOfYears;
    this.currentStreamYearDropdownValues = [...Array.from({ length: maxYears }, (_, i) => i + 1)];
  }

  onSubmit() {
    let student = {
      firstName: this.studentForm.get('firstName').value,
      lastName: this.studentForm.get('lastName').value,
      collegeId: this.collegeService.currentActiveClgId,
      streamId: this.studentForm.get('stream').value,
      currStreamYear: this.studentForm.get('currentYear').value
    } as Student;

    if (this.data.action.toLowerCase() === "save") this.studentervice.addStudent(student);
    else if (this.data.action.toLowerCase() === "update") {
      student.id = this.data.student.id;
      this.studentervice.updateStudentDetails(this.data.student.id, student);
    }
    this.dialogRef.close();
    this.uiCommonService.load.next(true);
  }
}