import { Component } from '@angular/core';
import { DashboardTransacoesComponent } from "./dashboard-transacoes/dashboard-transacoes.component";
import { DashboardDespesaCategoriaComponent } from "./dashboard-despesa-categoria/dashboard-despesa-categoria.component";
import { DashboardReceitaCategoriaComponent } from "./dashboard-receita-categoria/dashboard-receita-categoria.component";
import { DashBoardFluxoCaixaComponent } from './dashboard-fluxo-caixa/dashboard-fluxo-caixa.component';
import { DashboardContaBancariaComponent } from "./dashboard-conta-bancaria/dashboard-conta-bancaria.component";

@Component({   
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    DashboardTransacoesComponent,
    DashboardDespesaCategoriaComponent,
    DashboardReceitaCategoriaComponent,
    DashBoardFluxoCaixaComponent,
    DashboardContaBancariaComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

}
