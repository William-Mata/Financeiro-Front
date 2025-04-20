import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import { DespesaComponent } from "./pages/despesa/despesa.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoginComponent,
    DespesaComponent,
    SidebarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt', 'es']);
    translate.setDefaultLang('pt');

    const browserLang = translate.getBrowserLang();
    const langToUse = browserLang && ['en', 'pt', 'es'].includes(browserLang) ? browserLang : 'pt';
    translate.use(langToUse);
  }

  trocarIdioma(lang: string) {
    this.translate.use(lang);
  }
}
