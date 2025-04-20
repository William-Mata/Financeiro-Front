import { provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
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