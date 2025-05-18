import { Component } from '@angular/core';
import { DashboardTransacoesComponent } from '../components/dashboard-transacoes/dashboard-transacoes.component';
import { DashboardDespesaCategoriaComponent } from '../components/dashboard-despesa-categoria/dashboard-despesa-categoria.component';
import { DashboardReceitaCategoriaComponent } from '../components/dashboard-receita-categoria/dashboard-receita-categoria.component';
import { DashBoardFluxoCaixaComponent } from '../components/dashboard-fluxo-caixa/dashboard-fluxo-caixa.component';
import { DashboardContaBancariaComponent } from '../components/dashboard-conta-bancaria/dashboard-conta-bancaria.component';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';

@Component({   
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    ImportacaoPadrao,
    DashboardTransacoesComponent,
    DashboardDespesaCategoriaComponent,
    DashboardReceitaCategoriaComponent,
    DashBoardFluxoCaixaComponent,
    DashboardContaBancariaComponent
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})

export class DashboardPage {

}
