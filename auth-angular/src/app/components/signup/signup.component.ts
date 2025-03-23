import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Add ReactiveFormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true, // Mark the component as standalone
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }
    console.log('Form submitted', this.signupForm.value);
  }
}
