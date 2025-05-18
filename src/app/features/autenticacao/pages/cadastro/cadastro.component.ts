import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';

@Component({   
  standalone: true,
  selector: 'app-cadastro',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  
  formControlLogin = new FormControl(''); 
  formControlSenha = new FormControl('');
  login?: string;
  senha?: string;
  confirmarSenha?: string;

  cadastro(){
  }

}
