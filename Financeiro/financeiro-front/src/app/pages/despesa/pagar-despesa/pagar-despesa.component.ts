import { DespesaPagamentoDto } from './../../../core/dtos/despesa/despesa-pagamento.dto';
import { Component, Input } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { DespesaService } from '../../../core/services/despesa/despesa.service';
import { ToastrService } from 'ngx-toastr';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

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
  despesa: DespesaPagamentoDto = new DespesaPagamentoDto();

  constructor(private despesaService: DespesaService, private toastr: ToastrService) {}

  pagar(){
    if(this.idPagar && this.idPagar > 0) {
      this.despesa.id = this.idPagar;
      this.despesaService.pagar(this.despesa);
      
      this.toastr.success('Despesa Paga.', 'Sucesso!');
      this.despesa = new DespesaPagamentoDto();
    }
  }
}
