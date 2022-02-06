import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-prompt-dailog',
  templateUrl: './delete-prompt-dailog.component.html',
  styleUrls: ['./delete-prompt-dailog.component.scss']
})
export class DeletePromptDailogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePromptDailogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { caller: string }) { }

  ngOnInit(): void {
  }

  onAction(event: string) {
    this.dialogRef.close({ event: event });
  }

}
