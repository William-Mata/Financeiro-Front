import { Component, Input } from '@angular/core';
import { ImportacaoFormulario } from '../../../../shared/imports/importacao.formulario.shared';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';
import { ReceitaService } from '../../../../core/services/receita/receita.service';
import { TraducaoNotificacaoService } from '../../../../core/services/translate/traducao-notificao.service';

@Component({   
  standalone: true,
  selector: 'app-estornar-receita',
  imports: [
     ImportacaoPadrao,
     ImportacaoFormulario
  ],
  templateUrl: './estornar-receita.component.html',
  styleUrl: './estornar-receita.component.scss'
})

export class EstornarReceitaComponent {
  @Input() idEstornar: number | undefined;

  constructor(private receitaService: ReceitaService,  private traducaoNotificacaoService : TraducaoNotificacaoService) {}

  estornar(){
    if(this.idEstornar && this.idEstornar > 0) {
      this.receitaService.estornar(this.idEstornar!);
      this.traducaoNotificacaoService.success('NOTIFICACAO.RECEITA_ESTORNADA', '');
    }
  }
}
