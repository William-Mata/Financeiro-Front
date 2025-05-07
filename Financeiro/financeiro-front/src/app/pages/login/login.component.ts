import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formControlLogin = new FormControl(''); 
  formControlSenha = new FormControl('');
  login?: string;
  senha?: string;

  logar(){
  }

}
