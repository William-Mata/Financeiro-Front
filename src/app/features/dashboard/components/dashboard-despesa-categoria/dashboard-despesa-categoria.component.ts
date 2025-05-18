import { Component, inject } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { GraficoDTO } from '../../../../core/dtos/grafico/grafico.dto';
import { DashBoardService } from '../../../../core/services/dashboard/dashboard.service';
import { TraducaoService } from '../../../../core/services/translate/traducao.service';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';

@Component({   
  standalone: true,
  selector: 'app-dashboard-despesa-categoria',
  imports: [
      NgxChartsModule,
      ImportacaoPadrao
    ],
  templateUrl: './dashboard-despesa-categoria.component.html',
  styleUrls: ['./dashboard-despesa-categoria.component.scss'],
})

export class DashboardDespesaCategoriaComponent {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  dados: GraficoDTO[] = [];
  view: [number, number] = [450, 205]; 

  constructor(private dashBoardService: DashBoardService, private traducaoService: TraducaoService) {
    if (this.isBrowser) {
      this.onResize(); 
      window.addEventListener('resize', this.onResize.bind(this));
    }

    this.buscarDados();
  }

  private async buscarDados() {
    let dados = await this.dashBoardService.listarDespesasPorSubcatergoarias();
    Object.assign(this, { dados });
  }

  formatarTooltip = (model: any): string => {
    return `${model?.data?.label} <p>${this.traducaoService.formatarMoedaPorIdioma(model.value)}</p>`;
  };

  onResize() {
    if (this.isBrowser) {
      this.view = [window.innerWidth * 0.3, window.innerHeight * 0.3];
    }
  }

  onSelect(data?: any): void {}
  onActivate(data?: any): void {}
  onDeactivate(data?: any): void {}
}