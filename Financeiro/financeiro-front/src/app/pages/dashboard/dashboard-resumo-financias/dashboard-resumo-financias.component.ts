import { Component, inject} from '@angular/core';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { GraficoDTO } from '../../../core/dtos/grafico/grafico.dto';
import { DashBoardService } from './../../../core/services/dashboard/dashboard.service';
import { TraducaoService } from '../../../core/services/translate/traducao.service';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-resumo-financias',
  imports: [
    NgxChartsModule,
    ImportacaoPadrao
  ],
  templateUrl: './dashboard-resumo-financias.component.html',
  styleUrls: ['./dashboard-resumo-financias.component.scss']
})

export class DashBoardResumoFinanciasComponent {
 private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private traducaoSub!: Subscription; 

  dados: GraficoDTO[] = [];
  view: [number, number] = [480, 205]; 

  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#198754', '#dc3545', '#0dcaf0'],
  };

  constructor(private dashBoardService: DashBoardService, private traducaoService: TraducaoService) {
    if (this.isBrowser) {
      this.onResize(); 
      window.addEventListener('resize', this.onResize.bind(this));
    }

    this.buscarDados();

    this.traducaoSub = this.traducaoService.translate.onLangChange.subscribe(() => {
      this.buscarDados(); 
    });
  }

  private async buscarDados() {
    this.dados = this.dashBoardService.buscarFluxoCaixa();
  }

  formatarTexto = (value: string): string => {
    return `${value}  | translate`;
  };

  formatarMoeda = (value: number): string => {
    return this.traducaoService.formatarMoedaPorIdioma(value);
  }

  onResize() {
    if (this.isBrowser) {
      this.view = [window.innerWidth * 0.3, window.innerHeight * 0.3];
    }
  }

  ngOnDestroy(): void {
    this.traducaoSub?.unsubscribe(); 

    if (this.isBrowser) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }
}