import { Component } from '@angular/core';
import { ImportacaoPadrao } from "../../../shared/imports/importacao.padrao.shared";
import { CadastrarContaBancariaComponent } from "./cadastrar-conta-bancaria/cadastrar-conta-bancaria.component";
import { ConsultarContaBancariaComponent } from './consultar-conta-bancaria/consultar-conta-bancaria.component';
import { EditarContaBancariaComponent } from './editar-conta-bancaria/editar-conta-bancaria.component';
import { InativarContaBancariaComponent } from './alterar-status-conta-bancaria/alterar-status-conta-bancaria.component';

@Component({   
  standalone: true,
  selector: 'app-conta-bancaria',
  imports: [
    ImportacaoPadrao,
    ConsultarContaBancariaComponent,
    CadastrarContaBancariaComponent,
    EditarContaBancariaComponent,
    InativarContaBancariaComponent
  ],
  templateUrl: './conta-bancaria.component.html',
  styleUrl: './conta-bancaria.component.scss'
})

export class ContaBancariaComponent {

  idEditar: number = 0;
  idConta: number = 0;

  editarContaBancaria(idEditar: number) {
    this.idEditar = idEditar;
  }

  alterarStatusContaBancaria(idConta: number) {
    this.idConta = idConta;
  }
}