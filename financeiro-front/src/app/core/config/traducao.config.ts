import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localePt);
registerLocaleData(localeEn);
registerLocaleData(localeEs);

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}

export function provideTranslations() {
  return [
    importProvidersFrom(
      MatDatepickerModule,
      MatNativeDateModule,
      TranslateModule.forRoot({
        defaultLanguage: 'pt',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ), 
    {
      provide: MAT_DATE_LOCALE,
      useValue: navigator.language
    }
  ];
}