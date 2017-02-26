import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MembershipDialogComponent } from './membership/dialog/membership-dialog.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dialogRef: MdDialogRef<MembershipDialogComponent>;
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialogRef = this.dialog.open(MembershipDialogComponent, {
      disableClose: false
    });
  }
}
