import { Component } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { CadastrarDespesaComponent } from '../components/cadastrar-despesa/cadastrar-despesa.component';
import { ConsultarDespesaComponent } from '../components/consultar-despesa/consultar-despesa.component';
import { DeletarDespesaComponent } from '../components/deletar-despesa/deletar-despesa.component';
import { EditarDespesaComponent } from '../components/editar-despesa/editar-despesa.component';
import { PagarDespesaComponent } from '../components/pagar-despesa/pagar-despesa.component';
import { EstornarDespesaComponent } from '../components/estornar-despesa/estornar-despesa.component';

@Component({   
  standalone: true,
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
  templateUrl: './despesa.page.html',
  styleUrl: './despesa.page.scss'
})

export class DespesaPage {
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