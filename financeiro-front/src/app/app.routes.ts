import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/components/dashboard.component';
import { DespesaComponent } from './pages/despesa/components/despesa.component';
import { LoginComponent } from './pages/login/login.component';
import { ReceitaComponent } from './pages/receita/components/receita.component';
import { ContaBancariaComponent } from './pages/conta-bancaria/components/conta-bancaria.component';
import { CartaoComponent } from './pages/cartao/components/cartao.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'despesa', component: DespesaComponent },
    { path: 'receita', component: ReceitaComponent },
    { path: 'conta-bancaria', component: ContaBancariaComponent },
    { path: 'cartao', component: CartaoComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];
