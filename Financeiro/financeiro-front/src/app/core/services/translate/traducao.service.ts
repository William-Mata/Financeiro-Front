import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { DateAdapter } from '@angular/material/core';

@Injectable({
    providedIn: 'root'
})

export class TraducaoService {

    private translate: TranslateService
    private idiomaPadrao : string = 'pt';
    public idiomasDisponiveis : string[] = ['pt', 'en', 'es'];

    constructor(translate: TranslateService, 
                private titleService: Title,
                private dateAdapter: DateAdapter<any>)
    {
        this.translate = translate;
    }

    iniciarTraducao() {
        this.translate.addLangs(this.idiomasDisponiveis);
        this.translate.setDefaultLang(this.idiomaPadrao); 
        this.translate.use(this.buscarIdiomaDoNavegador());
        this.alterarTextos();
    }

    alterarIdioma(idioma: string) {
        this.translate.use(idioma);
        this.alterarTextos();
    }
    
    buscarIdiomaAtual() { 
        return this.translate.currentLang; 
    }
    
    buscarLocal(): string { 
        switch(this.buscarIdiomaAtual()) {
            case 'en':
                return "en-US";
            case 'es':
                return "es-ES";
            default:
                return "pt-br";
        }
    }

    buscarIdiomaDoNavegador() {
        const browserLang = this?.translate?.getBrowserLang();
        return browserLang && this.idiomasDisponiveis.includes(browserLang) ? browserLang : this.idiomaPadrao;
    }

    formatarMoedaPorIdioma(valor: number): string { 
        let locale = this.buscarLocal();
        let currency =  locale === 'en-US' ? 'USD' : locale === 'es-ES' ? 'ARS' : 'BRL';
        return valor.toLocaleString(locale, { style: "currency", currency})
    }

    private alterarTextos() {
        this.alterarTitulo();
        this.setLocaleParaDataPicker();
    }

    private alterarTitulo() {
        this.translate.get('TITLE').subscribe((translatedTitle: string) => {
            this.titleService.setTitle(translatedTitle);
        });
    }

    private setLocaleParaDataPicker() {
        this.dateAdapter.setLocale(this.buscarLocal());
    }
}