import { FiltroReceita } from '../../../core/models/filtro/filtro-receita.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ReceitaListaDTO } from '../../../core/dtos/receita/receita-lista.dto';
import { ReceitaService } from '../../../core/services/receita/receita.service';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';

@Component({
  selector: 'app-consultar-receita',
  imports: [
    ImportacaoPadrao,
    ImportacaoFormulario,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './consultar-receita.component.html',
  styleUrl: './consultar-receita.component.scss',
})

export class ConsultarReceitaComponent {
  @Output() idEditar = new EventEmitter<number>();
  @Output() idDeletar = new EventEmitter<number>();
  @Output() idReceber = new EventEmitter<number>();
  @Output() idEstornar = new EventEmitter<number>();

  receitas: ReceitaListaDTO[] = [];  
  filtro: FiltroReceita = new FiltroReceita();

  constructor(private receitaService: ReceitaService, private traducaoNotificacaoService: TraducaoNotificacaoService) {
    this.receitas = this.receitaService.listReceitasDTO(this.filtro);
  }
  
  ngOnInit(){
    this.receitaService
    .receitas$.subscribe(() => 
      this.receitas = this.receitaService.listReceitasDTO(this.filtro));
  }
  
  consultar(){
    this.receitas = this.receitaService.listReceitasDTO(this.filtro);
    this.traducaoNotificacaoService.success('NOTIFICACAO.CONSULTA_REALIZADA', '');
  }

  enviarEditar(idEditar: number){
    this.idEditar.emit(idEditar);
  }

  enviarDeletar(idDeletar: number){
    this.idDeletar.emit(idDeletar);
  }

  enviarPagar(idReceber: number){
    this.idReceber.emit(idReceber);
  }

  enviarEstornar(idEstornar: number){
    this.idEstornar.emit(idEstornar);
  }
}