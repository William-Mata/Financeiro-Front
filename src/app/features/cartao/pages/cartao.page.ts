import { Component } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { CadastrarCartaoComponent } from '../components/cadastrar-cartao/cadastrar-cartao.component';
import { ConsultarCartaoComponent } from '../components/consultar-cartao/consultar-cartao.component';
import { InativarCartaoComponent } from '../components/alterar-status-cartao/alterar-status-cartao.component';
import { EditarCartaoComponent } from '../components/editar-cartao/editar-cartao.component';

@Component({   
  standalone: true,
  selector: 'app-cartao',
  imports: [
    ImportacaoPadrao,
    ConsultarCartaoComponent,
    CadastrarCartaoComponent,
    EditarCartaoComponent,
    InativarCartaoComponent
  ],
  templateUrl: './cartao.page.html',
  styleUrl: './cartao.page.scss'
})

export class CartaoPage {

  idEditar: number = 0;
  idCartao: number = 0;

  editarCartao(idEditar: number) {
    this.idEditar = idEditar;
  }

  alterarStatusCartao(idCartao: number) {
    this.idCartao = idCartao;
  }
}