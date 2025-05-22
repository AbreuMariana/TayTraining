import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LucideAngularModule } from 'lucide-angular';
import { LogIn } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, FormsModule,ReactiveFormsModule, CommonModule, MatFormFieldModule, LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  loginForm: FormGroup; 
  hidePassword = true;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({ 
      username: [''],
      password: ['']
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    console.log('Usuário:', this.loginForm.value.username);
    console.log('Senha:', this.loginForm.value.password);
  }
}
