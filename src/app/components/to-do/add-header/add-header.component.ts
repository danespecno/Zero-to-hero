import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-header',
  templateUrl: './add-header.component.html',
  styleUrls: ['./add-header.component.scss']
})
export class AddHeaderComponent implements OnInit {
  header: string;

  constructor(private MatDialogRef: MatDialogRef<AddHeaderComponent>) {
  }

  ngOnInit(): void {
  }

  addHeader() {
    this.MatDialogRef.close(this.header);
  }

}
