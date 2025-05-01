import { Component } from '@angular/core';
import { ImportacaoPadrao } from "../../shared/imports/importacao.padrao.shared";
import { CadastrarCartaoComponent } from "./cadastrar-cartao/cadastrar-cartao.component";
import { ConsultarCartaoComponent } from './consultar-cartao/consultar-cartao.component';
import { InativarCartaoComponent } from './alterar-status-cartao/alterar-status-cartao.component';
import { EditarCartaoComponent } from './editar-cartao/editar-cartao.component';

@Component({
  selector: 'app-cartao',
  imports: [
    ImportacaoPadrao,
    ConsultarCartaoComponent,
    CadastrarCartaoComponent,
    EditarCartaoComponent,
    InativarCartaoComponent
  ],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.scss'
})

export class CartaoComponent {

  idEditar: number = 0;
  idCartao: number = 0;

  editarCartao(idEditar: number) {
    this.idEditar = idEditar;
  }

  alterarStatusCartao(idCartao: number) {
    this.idCartao = idCartao;
  }
}