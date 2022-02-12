import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { SAVE_BTN_LABEL, UPDATE_BTN_LABEL } from 'src/app/common/Constants';
import { Lecturer } from 'src/app/models/lecturer';
import { College } from 'src/app/models/college';
import { CollegeService } from 'src/app/services/functional/college.service';
import { UiCommonService } from 'src/app/services/ui-common.service';
import { LecturerService } from 'src/app/services/functional/lecturer.service';

@Component({
  selector: 'app-create-update-dailog-box',
  templateUrl: './create-update-dailog-box.component.html',
  styleUrls: ['./create-update-dailog-box.component.scss']
})
export class CollegeCreateUpdateDailogBoxComponent implements OnInit {

  collegeForm: FormGroup;
  lecturerDropdownValues: Lecturer[];
  collegeDropdownValues: College[];
  subscriptions: Subscription;
  disableSave$: Observable<boolean>;
  action: string;
  title: string;
  submitBtnLabel: string;
  selectedCollege: College;
  private disableFieldsExceptCollege: Subject<boolean>;
  disableFieldsExceptCollege$: Observable<boolean>;

  constructor(private collegeService: CollegeService,
    private lecturerService: LecturerService,
    private formBuilder: FormBuilder,
    private uiCommonService: UiCommonService,
    public dialogRef: MatDialogRef<CollegeCreateUpdateDailogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { action: string }) {
    this.subscriptions = new Subscription();

    this.collegeForm = this.formBuilder.group({
      collegeId: [],
      name: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      principalId: []
    });

    this.disableFieldsExceptCollege = new Subject<boolean>();
    this.disableFieldsExceptCollege$ = this.disableFieldsExceptCollege.asObservable();

    this.subscriptions.add(
      this.disableFieldsExceptCollege$.subscribe(disable => {
        if(disable) {
          this.collegeForm.get('name').disable();
          this.collegeForm.get('city').disable();
          this.collegeForm.get('state').disable();
          this.collegeForm.get('principalId').disable();
        } else {
          this.collegeForm.get('name').enable();
          this.collegeForm.get('city').enable();
          this.collegeForm.get('state').enable();
          this.collegeForm.get('principalId').enable();
        }
      })
    );
  }

  ngOnInit(): void {
    
    this.dialogRef.updateSize("27%");
    this.action = this.data.action.toLowerCase();
    if (this.action === "save") {
      this.title = "Add College";
      this.submitBtnLabel = SAVE_BTN_LABEL;
      this.disableFieldsExceptCollege.next(false);
    } else if (this.action === "update") {
      this.title = "Update College";
      this.submitBtnLabel = UPDATE_BTN_LABEL;
      this.disableFieldsExceptCollege.next(true);
    }

    this.disableSave$ = this.collegeService.isCollegeFormSubmitDisabled.asObservable();

    this.subscriptions.add(
      this.collegeService.collegesData$.subscribe(data => this.collegeDropdownValues = data)
    );
  }

  updateOtherFieldValues() {
    this.disableFieldsExceptCollege.next(false);
    this.selectedCollege = this.collegeDropdownValues.find(college => college.id == this.collegeForm.get('collegeId').value);
    this.collegeForm.get('name').setValue(this.selectedCollege.name);
    this.collegeForm.get('city').setValue(this.selectedCollege.location.split(',')[0]);
    this.collegeForm.get('state').setValue(this.selectedCollege.location.split(',')[1]);
    this.subscriptions.add(
      this.lecturerService.lecturersData$.subscribe(data => this.lecturerDropdownValues = data.filter(lecturer => lecturer.collegeId == this.selectedCollege.id))
    );
    this.collegeForm.get('principalId').setValue(this.selectedCollege.principalId);
  }

  onSubmit() {
    let college = {
      location: this.collegeForm.get('city').value + ',' + this.collegeForm.get('state').value,
      name: this.collegeForm.get('name').value,
      principalId: this.collegeForm.get('principalId')?.value
    } as College;

    if (this.data.action.toLowerCase() === "save") this.collegeService.addCollege(college);
    else if (this.data.action.toLowerCase() === "update") {
      college.id = this.selectedCollege.id;
      this.collegeService.updateCollegeDetails(this.selectedCollege.id, college);
    }
    this.dialogRef.close();
    this.uiCommonService.load.next(true);
  }

}
