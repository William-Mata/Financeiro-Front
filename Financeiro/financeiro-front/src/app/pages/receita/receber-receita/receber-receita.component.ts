import { ReceitaRecebimentoDTO } from '../../../core/dtos/receita/receita-recebimento.dto';
import { Component, Input } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { ReceitaService } from '../../../core/services/receita/receita.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';

@Component({
  selector: 'app-receber-receita',
  imports: [
      ImportacaoPadrao,
      ImportacaoFormulario,
      NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './receber-receita.component.html',
  styleUrl: './receber-receita.component.scss'
})

export class ReceberReceitaComponent {
  @Input() idReceber: number | undefined;
  receita: ReceitaRecebimentoDTO = new ReceitaRecebimentoDTO();

  constructor(private receitaService: ReceitaService, private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  receber(){
    if(this.idReceber && this.idReceber > 0) {
      this.receita.id = this.idReceber;
      this.receitaService.receber(this.receita);
      
      this.traducaoNotificacaoService.success('NOTIFICACAO.RECEITA_RECEBIDA', '');
      this.receita = new ReceitaRecebimentoDTO();
    }
  }
}
