import { Routes } from '@angular/router';
import { LoginComponent } from './features/autenticacao/pages/login/login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { CadastroComponent } from './features/autenticacao/pages/cadastro/cadastro.component';

export const routes: Routes = [

  { 
    path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', component: LoginComponent 
  },
  { 
    path: 'cadastro', component: CadastroComponent 
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    // canActivate: [authGuard] 
  },
  { 
    path: 'despesa', 
    loadChildren: () => import('./features/despesa/despesa.routes').then(m => m.DESPESA_ROUTES),
    // canActivate: [authGuard] 
  },
  { 
    path: 'receita', 
    loadChildren: () => import('./features/receita/receita.routes').then(m => m.RECEITA_ROUTES),
    // canActivate: [authGuard] 
  },
  {
    path: 'conta-bancaria',
    loadChildren: () => import('./features/conta-bancaria/conta-bancaria.routes').then(m => m.CONTA_BANCARIA_ROUTES),
    // canActivate: [authGuard] 
  },
  {
    path: 'cartao',
    loadChildren: () => import('./features/cartao/cartao.routes').then(m => m.CARTAO_ROUTES),
    // canActivate: [authGuard] 
  },
  { 
    path: '**', 
    loadComponent: () => import('./features/pagina-nao-encontrada/pages/pagina-nao-encontrada.component').then(m => m.PaginaNaoEncontadaComponent),
    // canActivate: [authGuard]  
  }
];