import { Component, Input  } from '@angular/core';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../../shared/imports/importacao.formulario.shared';
import { DespesaService } from '../../../../core/services/despesa/despesa.service';
import { TraducaoNotificacaoService } from '../../../../core/services/translate/traducao-notificao.service';

@Component({   
  standalone: true,
  selector: 'app-deletar-despesa',
  imports: [
    ImportacaoPadrao,
    ImportacaoFormulario
  ],
  templateUrl: './deletar-despesa.component.html',
  styleUrl: './deletar-despesa.component.scss'
})

export class DeletarDespesaComponent {
  @Input() idDeletar: number | undefined;

  constructor(private despesaService: DespesaService, private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  deletar(){
    if(this.idDeletar && this.idDeletar > 0) {
      this.despesaService.deletar(this.idDeletar!);
      this.traducaoNotificacaoService.success('NOTIFICACAO.DESPESA_DELETADA', '');
    }
  }
}
