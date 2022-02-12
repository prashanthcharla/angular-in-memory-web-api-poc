import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { LECTURER_CREATE_FORM_HEADER, LECTURER_UPDATE_FORM_HEADER, SAVE_BTN_LABEL, UPDATE_BTN_LABEL } from 'src/app/common/Constants';
import { Lecturer } from 'src/app/models/lecturer';
import { Stream } from 'src/app/models/stream';
import { CollegeService } from 'src/app/services/functional/college.service';
import { LecturerService } from 'src/app/services/functional/lecturer.service';
import { StreamService } from 'src/app/services/functional/stream.service';
import { UiCommonService } from 'src/app/services/ui-common.service';

@Component({
  selector: 'app-lecturer-create-update-dailog-box',
  templateUrl: './create-update-dailog-box.component.html',
  styleUrls: ['./create-update-dailog-box.component.scss']
})
export class LecturerCreateUpdateDailogBoxComponent implements OnInit {

  lecturerForm: FormGroup;
  streamDropdownValues: Stream[];
  subscriptions: Subscription;
  disableSave$: Observable<boolean>;
  action: string;
  title: string;
  submitBtnLabel: string;

  constructor(private lecturerService: LecturerService,
    private streamService: StreamService,
    private collegeService: CollegeService,
    private formBuilder: FormBuilder,
    private uiCommonService: UiCommonService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { action: string, lecturer: Lecturer },
    public dialogRef: MatDialogRef<LecturerCreateUpdateDailogBoxComponent>) {
    this.streamDropdownValues = new Array<Stream>();
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.dialogRef.updateSize("27%");
    this.action = this.data.action.toLowerCase();

    this.lecturerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      stream: ['', Validators.required]
    });

    if (this.action === "save") {
      this.title = LECTURER_CREATE_FORM_HEADER;
      this.submitBtnLabel = SAVE_BTN_LABEL;
    } else if (this.action === "update") {
      this.title = LECTURER_UPDATE_FORM_HEADER;
      this.submitBtnLabel = UPDATE_BTN_LABEL;
      this.lecturerForm.get('firstName').setValue(this.data.lecturer.firstName);
      this.lecturerForm.get('lastName').setValue(this.data.lecturer.lastName);
      this.lecturerForm.get('stream').setValue(this.data.lecturer.streamId);
    }

    this.disableSave$ = this.lecturerService.isLecturerFormSubmitDisabled.asObservable();

    this.subscriptions.add(
      this.streamService.streamsData$.subscribe(data => {
        this.streamDropdownValues = data;
      })
    );
  }

  onSubmit() {
    let lecturer = {
      firstName: this.lecturerForm.get('firstName').value,
      lastName: this.lecturerForm.get('lastName').value,
      collegeId: this.collegeService.currentActiveClgId,
      streamId: this.lecturerForm.get('stream').value,
    } as Lecturer;
    if (this.data.action.toLowerCase() === "save") this.lecturerService.addLecturer(lecturer);
    else if (this.data.action.toLowerCase() === "update") {
      lecturer.id = this.data.lecturer.id;
      this.lecturerService.updateLecturerDetails(this.data.lecturer.id, lecturer);
    }
    this.dialogRef.close();
    this.uiCommonService.load.next(true);
  }

}
