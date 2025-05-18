import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-pagina-nao-encontrada',
  standalone: true,
  imports: [],
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrls: ['./pagina-nao-encontrada.component.scss']
})
export class PaginaNaoEncontadaComponent {
  
  protected readonly errorMessage = signal('Página não encontrada');
  protected readonly suggestions = signal([
    'Verifique o URL digitado',
    'Navegue pelo menu principal',
    'Use a busca do site'
  ]);
}