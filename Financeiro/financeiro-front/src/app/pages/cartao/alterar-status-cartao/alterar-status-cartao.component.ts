import { Component, Input, SimpleChanges  } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';
import { CartaoService } from '../../../core/services/cartao/cartao.service';
import { Cartao } from './../../../core/models/cartao/cartao.model';

@Component({
  selector: 'app-alterar-status-cartao',
  imports: [
    ImportacaoPadrao,
    ImportacaoFormulario
  ],
  templateUrl: './alterar-status-cartao.component.html',
  styleUrl: './alterar-status-cartao.component.scss'
})

export class InativarCartaoComponent {
  @Input() idCartao: number | undefined;

  cartao: Cartao = new Cartao();

  constructor(private cartaoService: CartaoService, private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.cartao = new Cartao();

    if (changes['idCartao'] && changes['idCartao'].currentValue > 0) {
      this.cartao = this.cartaoService.buscarCartaoPorId(this.idCartao!);
    }
  }
 
  alterarStatus(){
    if(this.idCartao && this.idCartao > 0) {
      if(this.cartao.status == 'Desbloqueado'){
        this.traducaoNotificacaoService.success('NOTIFICACAO.CARTAO_BLOQUEAR', '');
      } 
      else {
        this.traducaoNotificacaoService.success('NOTIFICACAO.CARTAO_DESBLOQUEAR', '');
      }
      
      this.cartaoService.alterarStatus(this.idCartao!);
    }
  }
}
