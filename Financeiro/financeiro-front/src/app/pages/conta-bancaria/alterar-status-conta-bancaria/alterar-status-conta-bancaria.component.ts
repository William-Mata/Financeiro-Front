import { ContaBancaria } from './../../../core/models/conta-bancaria/conta-bancaria.model';
import { Component, Input, SimpleChanges  } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';
import { ContaBancariaService } from '../../../core/services/conta-bancaria/conta-bancaria.service';

@Component({
  selector: 'app-alterar-status-conta-bancaria',
  imports: [
    ImportacaoPadrao,
    ImportacaoFormulario
  ],
  templateUrl: './alterar-status-conta-bancaria.component.html',
  styleUrl: './alterar-status-conta-bancaria.component.scss'
})

export class InativarContaBancariaComponent {
  @Input() idConta: number | undefined;

  contaBancaria: ContaBancaria = new ContaBancaria();

  constructor(private contaBancariaService: ContaBancariaService, private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.contaBancaria = new ContaBancaria();

    if (changes['idConta'] && changes['idConta'].currentValue > 0) {
      this.contaBancaria = this.contaBancariaService.buscarContaBancariaPorId(this.idConta!);
    }
  }
 
  alterarStatus(){
    if(this.idConta && this.idConta > 0) {
      if(this.contaBancaria.status == 'Ativa'){
        this.traducaoNotificacaoService.success('NOTIFICACAO.CONTA_BANCARIA_INATIVAR', '');
      } 
      else {
        this.traducaoNotificacaoService.success('NOTIFICACAO.CONTA_BANCARIA_ATIVAR', '');
      }
      
      this.contaBancariaService.alterarStatus(this.idConta!);
    }
  }
}
