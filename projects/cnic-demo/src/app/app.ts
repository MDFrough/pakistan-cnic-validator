import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  CnicValidatorDirective,
  CnicMaskDirective,
  CnicPipe,
  cnicValidatorFn,
} from 'cnic-validator';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    CnicValidatorDirective,
    CnicMaskDirective,
    CnicPipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cnic-demo');

  form!: FormGroup;

  cnic: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cnic: ['', [Validators.required, cnicValidatorFn]]
    });
  }
}
