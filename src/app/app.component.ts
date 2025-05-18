import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { TraducaoService } from './core/services/translate/traducao.service';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  rotaAtual: string = '';

  constructor(
    private traducaoService: TraducaoService, 
    private router: Router
  ) {
    this.traducaoService.iniciarTraducao();
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rotaAtual = event.url;
      }
    });
  }

  ngOnInit() {
    this.traducaoService.iniciarTraducao();
  }

  ocultarSidebar(): boolean {
    return ['/login', '/cadastro', '/recuperar-senha'].includes(this.rotaAtual);
  }
}