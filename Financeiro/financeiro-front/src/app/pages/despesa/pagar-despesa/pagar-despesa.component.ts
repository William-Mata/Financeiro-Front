import { DespesaPagamentoDTO } from './../../../core/dtos/despesa/despesa-pagamento.dto';
import { Component, Input } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { DespesaService } from '../../../core/services/despesa/despesa.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';

@Component({
  selector: 'app-pagar-despesa',
  imports: [
      ImportacaoPadrao,
      ImportacaoFormulario,
      NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './pagar-despesa.component.html',
  styleUrl: './pagar-despesa.component.scss'
})

export class PagarDespesaComponent {
  @Input() idPagar: number | undefined;
  despesa: DespesaPagamentoDTO = new DespesaPagamentoDTO();

  constructor(private despesaService: DespesaService, private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  pagar(){
    if(this.idPagar && this.idPagar > 0) {
      this.despesa.id = this.idPagar;
      this.despesaService.pagar(this.despesa);
      
      this.traducaoNotificacaoService.success('NOTIFICACAO.DESPESA_PAGA', '');
      this.despesa = new DespesaPagamentoDTO();
    }
  }
}
