import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { TraducaoService } from './core/services/translate/traducao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  rotaAtual: string = '';

  constructor(private traducaoService: TraducaoService, Router: Router) {
    this.traducaoService.iniciarTraducao();
    this.rotaAtual = Router.url
  }

  ngOnInit() {
    this.traducaoService.iniciarTraducao();
    this.ocultarComponentes();
  }

  ocultarComponentes(): boolean {
    return true;
  }
}
