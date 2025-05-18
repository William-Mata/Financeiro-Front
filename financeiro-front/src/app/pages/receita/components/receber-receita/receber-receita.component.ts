import { Component, Input } from '@angular/core';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../../shared/imports/importacao.formulario.shared';
import { ReceitaService } from '../../../../core/services/receita/receita.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../../core/services/translate/traducao-notificao.service';
import { ContaBancariaService } from '../../../../core/services/conta-bancaria/conta-bancaria.service';
import { FiltroContaBancaria } from '../../../../core/models/filtros/filtro-conta-bancaria.model';
import { ContaBancariaListaDTO } from '../../../../core/dtos/conta-bancaria/conta-bancaria-lista.dto';
import { FormaRecebimentoService } from '../../../../core/services/forma-recebimento/forma-recibimento.service';
import { ReceitaRecebimentoDTO } from '../../../../core/dtos/receita/receita-recebimento.dto';

@Component({   
  standalone: true,
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
  formasRecebimentos: any[] = [];
  contasBancarias: ContaBancariaListaDTO[] = [];

  constructor(private receitaService: ReceitaService, private traducaoNotificacaoService: TraducaoNotificacaoService,
              private contaBancariaService : ContaBancariaService, private formaRecebimentoService: FormaRecebimentoService)
  {
    this.formasRecebimentos = this.formaRecebimentoService.listarFormasRecebimentos();
    this.contasBancarias = this.contaBancariaService.listarContaBancarias(new FiltroContaBancaria("Ativa",  undefined, undefined));
  }

  receber(){
    if(this.idReceber && this.idReceber > 0) {
      this.receita.id = this.idReceber;
      this.receitaService.receber(this.receita);
      
      this.traducaoNotificacaoService.success('NOTIFICACAO.RECEITA_RECEBIDA', '');
      this.receita = new ReceitaRecebimentoDTO();
    }
  }
}
