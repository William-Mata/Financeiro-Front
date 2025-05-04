import { Component, EventEmitter, Output } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';
import { CartaoService } from '../../../core/services/cartao/cartao.service';
import { CartaoListaDTO } from '../../../core/dtos/cartao/cartao-lista.dto';
import { FiltroCartao } from '../../../core/models/filtros/filtro-cartao.model';

@Component({
  selector: 'app-consultar-cartao',
  imports: [
    ImportacaoPadrao,
    ImportacaoFormulario,
  ],
  providers: [provideNgxMask()],
  templateUrl: './consultar-cartao.component.html',
  styleUrl: './consultar-cartao.component.scss',
})

export class ConsultarCartaoComponent {
  @Output() idEditar = new EventEmitter<number>();
  @Output() idCartao = new EventEmitter<number>();

  cartoes: CartaoListaDTO[] = [];  
  filtro: FiltroCartao = new FiltroCartao();

  constructor(private cartaoService: CartaoService, private traducaoNotificacaoService: TraducaoNotificacaoService) {
    this.cartoes = this.cartaoService.listarCartoes(this.filtro);
  }
  
  ngOnInit(){
    this.cartaoService
    .cartoes$.subscribe(() => 
      this.cartoes = this.cartaoService.listarCartoes(this.filtro));
  }
  
  consultar(){
    this.cartoes = this.cartaoService.listarCartoes(this.filtro);
    this.traducaoNotificacaoService.success('NOTIFICACAO.CONSULTA_REALIZADA', '');
  }

  enviarEditar(idEditar: number){
    this.idEditar.emit(idEditar);
  }

  enviarAlterarStatus(idCartao: number){
    this.idCartao.emit(idCartao);
  }
}