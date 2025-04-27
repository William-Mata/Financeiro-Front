import { Component, Input } from '@angular/core';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { DespesaService } from '../../../core/services/despesa/despesa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estornar-despesa',
  imports: [
     ImportacaoPadrao,
     ImportacaoFormulario
  ],
  templateUrl: './estornar-despesa.component.html',
  styleUrl: './estornar-despesa.component.scss'
})

export class EstornarDespesaComponent {
  @Input() idEstornar: number | undefined;

  constructor(private despesaService: DespesaService, private toastr: ToastrService) {}

  estornar(){
    if(this.idEstornar && this.idEstornar > 0) {
      this.despesaService.estornar(this.idEstornar!);
      this.toastr.success('Despesa Estornada.', 'Sucesso!');
    }
  }
}
