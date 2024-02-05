import {Component, inject, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {DOCUMENT} from "@angular/common";
import {Direction} from "@angular/cdk/bidi";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormField, MatInput, MatLabel, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  document = inject(DOCUMENT);
  dialog = inject(MatDialog);
  // renderer = inject(Renderer2);

  currentDir = this.document.documentElement.dir as Direction;

  toggleDir() {
    this.currentDir = this.currentDir === 'ltr' ? 'rtl' : 'ltr';
    this.document.documentElement.dir = this.currentDir;
    // this.renderer.setAttribute(this.document.documentElement, 'dir', this.currentDir);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
