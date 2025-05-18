import { Component } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { CadastrarReceitaComponent } from '../components/cadastrar-receita/cadastrar-receita.component';
import { ConsultarReceitaComponent } from '../components/consultar-receita/consultar-receita.component';
import { DeletarReceitaComponent } from '../components/deletar-receita/deletar-receita.component';
import { EditarReceitaComponent } from '../components/editar-receita/editar-receita.component';
import { ReceberReceitaComponent } from '../components/receber-receita/receber-receita.component';
import { EstornarReceitaComponent } from '../components/estornar-receita/estornar-receita.component';

@Component({   
  standalone: true,
  selector: 'app-receita',
  imports: [
    ImportacaoPadrao,
    ConsultarReceitaComponent,
    CadastrarReceitaComponent,
    EditarReceitaComponent,
    DeletarReceitaComponent,
    ReceberReceitaComponent,
    EstornarReceitaComponent
],
  templateUrl: './receita.page.html',
  styleUrl: './receita.page.scss'
})

export class ReceitaPage {
  idEditar: number = 0;
  idDeletar: number = 0;
  idReceber: number = 0;
  idEstornar: number = 0;

  editarReceita(id: number) {
    this.idEditar = id;
  }

  receberReceita(id: number) {
    this.idReceber = id;
  }

  estornarReceita(id: number) {
    this.idEstornar = id;
  }

  deletarReceita(idDeletar: number) {
    this.idDeletar = idDeletar;
  }
}