import { Component, inject} from '@angular/core';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { GraficoDTO } from '../../../core/dtos/grafico/grafico.dto';
import { DashBoardService } from './../../../core/services/dashboard/dashboard.service';
import { TraducaoService } from '../../../core/services/translate/traducao.service';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';


@Component({
  selector: 'app-dashboard-receita-categoria',
  imports: [
    NgxChartsModule,
    ImportacaoPadrao
  ],
  templateUrl: './dashboard-receita-categoria.component.html',
  styleUrls: ['./dashboard-receita-categoria.component.scss'],
})

export class DashboardReceitaCategoriaComponent {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  dados: GraficoDTO[] = [];
  view: [number, number] = [450, 205]; 

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
  }

  private async buscarDados() {
    let dados = await this.dashBoardService.listarReceitasPorSubcatergoarias();
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