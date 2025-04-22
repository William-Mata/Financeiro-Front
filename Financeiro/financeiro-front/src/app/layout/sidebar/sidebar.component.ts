import { Component } from '@angular/core';
import { ImportacaoPadrao } from '../../shared/imports/importacao.padrao.shared';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sidebar',
  imports:[
            ImportacaoPadrao, 
            RouterLink, 
            MatIconModule
          ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  isExpandido = false;

  alternarSidebar() {
    document.getElementById('wrapper')?.classList.toggle('toggled');
    this.isExpandido = !this.isExpandido;
  }

  alterarTema() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
  }
}