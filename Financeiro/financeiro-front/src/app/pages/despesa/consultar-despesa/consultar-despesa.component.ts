import { FiltroDespesa } from './../../../core/models/filtro/filtro-despesa.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { DespesaListaDTO } from '../../../core/dtos/despesa/despesa-lista.dto';
import { DespesaService } from '../../../core/services/despesa/despesa.service';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';

@Component({
  selector: 'app-consultar-despesa',
  imports: [
    ImportacaoPadrao,
    ImportacaoFormulario,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './consultar-despesa.component.html',
  styleUrl: './consultar-despesa.component.scss',
})

export class ConsultarDespesaComponent {
  @Output() idEditar = new EventEmitter<number>();
  @Output() idDeletar = new EventEmitter<number>();
  @Output() idPagar = new EventEmitter<number>();
  @Output() idEstornar = new EventEmitter<number>();

  despesas: DespesaListaDTO[] = [];  
  filtro: FiltroDespesa = new FiltroDespesa();

  constructor(private despesaService: DespesaService, private traducaoNotificacaoService: TraducaoNotificacaoService) {
    this.despesas = this.despesaService.listDespesasDTO(this.filtro);
  }
  
  ngOnInit(){
    this.despesaService
    .despesas$.subscribe(() => 
      this.despesas = this.despesaService.listDespesasDTO(this.filtro));
  }
  
  consultar(){
    this.despesas = this.despesaService.listDespesasDTO(this.filtro);
    this.traducaoNotificacaoService.success('NOTIFICACAO.CONSULTA_REALIZADA', '');
  }

  enviarEditar(idEditar: number){
    this.idEditar.emit(idEditar);
  }

  enviarDeletar(idDeletar: number){
    this.idDeletar.emit(idDeletar);
  }

  enviarPagar(idPagar: number){
    this.idPagar.emit(idPagar);
  }

  enviarEstornar(idEstornar: number){
    this.idEstornar.emit(idEstornar);
  }
}