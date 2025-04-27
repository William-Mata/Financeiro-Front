import { Component } from '@angular/core';
import { ImportacaoPadrao } from "../../shared/imports/importacao.padrao.shared";
import { CadastrarReceitaComponent } from "./cadastrar-receita/cadastrar-receita.component";
import { ConsultarReceitaComponent } from "./consultar-receita/consultar-receita.component";
import { DeletarReceitaComponent } from "./deletar-receita/deletar-receita.component";
import { EditarReceitaComponent } from './editar-receita/editar-receita.component';
import { ReceberReceitaComponent } from "./receber-receita/receber-receita.component";
import { EstornarReceitaComponent } from './estornar-receita/estornar-receita.component';

@Component({
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
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.scss'
})

export class ReceitaComponent {
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