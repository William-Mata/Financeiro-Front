import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DespesaComponent } from './pages/despesa/despesa.component';
import { LoginComponent } from './pages/login/login.component';
import { ReceitaComponent } from './pages/receita/receita.component';
import { ContaBancariaComponent } from './pages/conta-bancaria/conta-bancaria.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'despesa', component: DespesaComponent },
    { path: 'receita', component: ReceitaComponent },
    { path: 'conta-bancaria', component: ContaBancariaComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];
