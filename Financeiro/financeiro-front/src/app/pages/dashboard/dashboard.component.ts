import { Component } from '@angular/core';
import { DashboardTransacoesComponent } from "./dashboard-transacoes/dashboard-transacoes.component";
import { DashboardDespesaCategoriaComponent } from "./dashboard-despesa-categoria/dashboard-despesa-categoria.component";
import { DashboardReceitaCategoriaComponent } from "./dashboard-receita-categoria/dashboard-receita-categoria.component";


@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardTransacoesComponent, 
    DashboardDespesaCategoriaComponent,
    DashboardReceitaCategoriaComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

}
