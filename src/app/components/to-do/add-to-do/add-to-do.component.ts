import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-to-do",
  templateUrl: "./add-to-do.component.html",
  styleUrls: ["./add-to-do.component.scss"],
})
export class AddToDoComponent implements OnInit {
  toDo: string;

  constructor(private MatDialogRef: MatDialogRef<AddToDoComponent>) {}

  ngOnInit(): void {}

  addToDo() {
    this.MatDialogRef.close(this.toDo);
  }
}
