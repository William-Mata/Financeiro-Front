import { FormaPagamentoService } from '../../../../core/services/forma-pagamento/forma-pagamento.service';
import { ContaBancariaService } from '../../../../core/services/conta-bancaria/conta-bancaria.service';
import { Component, Input } from '@angular/core';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../../shared/imports/importacao.formulario.shared';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../../core/services/translate/traducao-notificao.service';
import { DespesaService } from '../../../../core/services/despesa/despesa.service';
import { DespesaPagamentoDTO } from '../../../../core/dtos/despesa/despesa-pagamento.dto';
import { ContaBancariaListaDTO } from '../../../../core/dtos/conta-bancaria/conta-bancaria-lista.dto';
import { FiltroContaBancaria } from '../../../../core/models/filtros/filtro-conta-bancaria.model';

@Component({   
  standalone: true,
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
  formasPagamentos: any[] = [];
  contasBancarias: ContaBancariaListaDTO[] = [];

  constructor(private despesaService: DespesaService, private traducaoNotificacaoService: TraducaoNotificacaoService,
              private contaBancariaService: ContaBancariaService, private formaPagamentoService: FormaPagamentoService) 
  {
    this.formasPagamentos = this.formaPagamentoService.listarFormasPagamentos();
    this.contasBancarias = this.contaBancariaService.listarContaBancarias(new FiltroContaBancaria("Ativa", undefined, undefined));
  }

  pagar(){
    if(this.idPagar && this.idPagar > 0) {
      this.despesa.id = this.idPagar;
      this.despesaService.pagar(this.despesa);
      
      this.traducaoNotificacaoService.success('NOTIFICACAO.DESPESA_PAGA', '');
      this.despesa = new DespesaPagamentoDTO();
    }
  }
}
