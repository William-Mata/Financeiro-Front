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
  selector: 'app-dashboard-conta-bancaria',
  imports: [ImportacaoPadrao,
           NgxChartsModule],
  templateUrl: './dashboard-conta-bancaria.component.html',
  styleUrl: './dashboard-conta-bancaria.component.scss'
})

export class DashboardContaBancariaComponent {

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  dados: GraficoDTO[] = [];
  view: [number, number] = [650, 300]; 

  constructor(private dashBoardService: DashBoardService, private traducaoService: TraducaoService) {
    if (this.isBrowser) {
      this.onResize(); 
      window.addEventListener('resize', this.onResize.bind(this));
    }

    this.buscarDados();
  }

  private async buscarDados() {
    let dados = await this.dashBoardService.listarContaBancarias();
    Object.assign(this, { dados });
  }

  formatarValor = (valor: any): string => {
    return `${this.traducaoService.formatarMoedaPorIdioma( Number.parseInt(valor.toString())?? 0)}`;
  };


  onResize() {
    if (this.isBrowser) {
      this.view = [window.innerWidth * 0.43, window.innerHeight * 0.4];
    }
  }

  onSelect(data?: any): void {}

}
