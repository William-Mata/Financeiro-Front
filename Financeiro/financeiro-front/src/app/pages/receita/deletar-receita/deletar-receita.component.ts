import { Component, Input  } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { ReceitaService } from '../../../core/services/receita/receita.service';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';


@Component({
  selector: 'app-deletar-receita',
  imports: [
    ImportacaoPadrao,
    ImportacaoFormulario
  ],
  templateUrl: './deletar-receita.component.html',
  styleUrl: './deletar-receita.component.scss'
})

export class DeletarReceitaComponent {
  @Input() idDeletar: number | undefined;

  constructor(private receitaService: ReceitaService, private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  deletar(){
    if(this.idDeletar && this.idDeletar > 0) {
      this.receitaService.deletar(this.idDeletar!);
      this.traducaoNotificacaoService.success('NOTIFICACAO.RECEITA_DELETADA', '');
    }
  }
}
