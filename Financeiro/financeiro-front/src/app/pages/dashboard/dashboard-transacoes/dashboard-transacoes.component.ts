import { Component } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { TransacaoService } from './../../../core/services/transacao/transacao.service';
import { TransacaoListaDTO } from '../../../core/dtos/transacao/transacao-lista.dto';
import { FiltroTransacao } from '../../../core/models/filtros/filtro-transacao.model';

@Component({
  selector: 'app-dashboard-transacoes',
  imports: [ImportacaoPadrao],
  templateUrl: './dashboard-transacoes.component.html',
  styleUrl: './dashboard-transacoes.component.scss'
})

export class DashboardTransacoesComponent {
  transacoes: TransacaoListaDTO[] = [];
  filtro: FiltroTransacao = new FiltroTransacao(undefined, 10, 1, 'id', true);

  constructor(private transacaoService: TransacaoService) { 
    this.transacaoService
    .transacoes$.subscribe(() => 
      this.transacoes = this.transacaoService.listarTransacoes(this.filtro));
  }

}
