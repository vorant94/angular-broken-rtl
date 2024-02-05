import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {DOCUMENT} from "@angular/common";
import {Direction} from "@angular/cdk/bidi";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  document = inject(DOCUMENT);

  currentDir = this.document.documentElement.dir as Direction;
}
