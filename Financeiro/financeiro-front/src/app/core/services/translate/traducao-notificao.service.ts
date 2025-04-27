import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class TraducaoNotificacaoService {

    constructor(private toastr: ToastrService,private translate: TranslateService) {}

    success(key: string, titleKey?: string) {
        this.translate.get([key, titleKey || '']).subscribe(translations => {
            this.toastr.success(translations[key], titleKey ? translations[titleKey] : '');
        });
    }

    error(key: string, titleKey?: string) {
        this.translate.get([key, titleKey || '']).subscribe(translations => {
            this.toastr.error(translations[key], titleKey ? translations[titleKey] : '');
        });
    }

    info(key: string, titleKey?: string) {
        this.translate.get([key, titleKey || '']).subscribe(translations => {
            this.toastr.info(translations[key], titleKey ? translations[titleKey] : '');
        });
    }

    warning(key: string, titleKey?: string) {
        this.translate.get([key, titleKey || '']).subscribe(translations => {
            this.toastr.warning(translations[key], titleKey ? translations[titleKey] : '');
        });
    }
}
