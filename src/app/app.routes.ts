import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [

  { 
    path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES) 
  },
  { 
    path: 'despesa', 
    loadChildren: () => import('./features/despesa/despesa.routes').then(m => m.DESPESA_ROUTES)
  },
  { 
    path: 'receita', 
    loadChildren: () => import('./features/receita/receita.routes').then(m => m.RECEITA_ROUTES) 
  },
  {
    path: 'conta-bancaria',
    loadChildren: () => import('./features/conta-bancaria/conta-bancaria.routes').then(m => m.CONTA_BANCARIA_ROUTES),
  },
  {
    path: 'cartao',
    loadChildren: () => import('./features/cartao/cartao.routes').then(m => m.CARTAO_ROUTES),
  },
  { 
      path: '**', 
      loadComponent: () => import('./features/pagina-nao-encontrada/pages/pagina-nao-encontrada.component').then(m => m.PaginaNaoEncontadaComponent) 
  }
];