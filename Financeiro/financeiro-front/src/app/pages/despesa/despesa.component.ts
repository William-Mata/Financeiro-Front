import { Component } from '@angular/core';
import { ImportacaoPadrao } from "../../shared/imports/importacao.padrao.shared";
import { CadastrarDespesaComponent } from "./cadastrar-despesa/cadastrar-despesa.component";
import { ConsultarDespesaComponent } from "./consultar-despesa/consultar-despesa.component";
import { DeletarDespesaComponent } from "./deletar-despesa/deletar-despesa.component";
import { EditarDespesaComponent } from './editar-despesa/editar-despesa.component';
import { PagarDespesaComponent } from "./pagar-despesa/pagar-despesa.component";
import { EstornarDespesaComponent } from './estornar-despesa/estornar-despesa.component';

@Component({
  selector: 'app-despesa',
  imports: [
    ImportacaoPadrao,
    ConsultarDespesaComponent,
    CadastrarDespesaComponent,
    EditarDespesaComponent,
    DeletarDespesaComponent,
    PagarDespesaComponent,
    EstornarDespesaComponent
],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})

export class DespesaComponent {
  idEditar: number = 0;
  idDeletar: number = 0;
  idPagar: number = 0;
  idEstornar: number = 0;

  editarDespesa(id: number) {
    this.idEditar = id;
  }

  pagarDespesa(id: number) {
    this.idPagar = id;
  }

  estornarDespesa(id: number) {
    this.idEstornar = id;
  }

  deletarDespesa(idDeletar: number) {
    this.idDeletar = idDeletar;
  }
}