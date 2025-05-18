import { Component } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { CadastrarContaBancariaComponent } from '../components/cadastrar-conta-bancaria/cadastrar-conta-bancaria.component';
import { ConsultarContaBancariaComponent } from '../components/consultar-conta-bancaria/consultar-conta-bancaria.component';
import { EditarContaBancariaComponent } from '../components/editar-conta-bancaria/editar-conta-bancaria.component';
import { InativarContaBancariaComponent } from '../components/alterar-status-conta-bancaria/alterar-status-conta-bancaria.component';

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
  templateUrl: './conta-bancaria.page.html',
  styleUrl: './conta-bancaria.page.scss'
})

export class ContaBancariaPage {

  idEditar: number = 0;
  idConta: number = 0;

  editarContaBancaria(idEditar: number) {
    this.idEditar = idEditar;
  }

  alterarStatusContaBancaria(idConta: number) {
    this.idConta = idConta;
  }
}