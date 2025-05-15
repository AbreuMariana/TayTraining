import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, FormsModule,ReactiveFormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  loginForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({ 
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    console.log('Usuário:', this.loginForm.value.username);
    console.log('Senha:', this.loginForm.value.password);
  }
}
