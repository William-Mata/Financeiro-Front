import { Injectable } from '@angular/core';
import { GraficoDTO } from '../../dtos/grafico/grafico.dto';
import { ReceitaService } from './../receita/receita.service';
import { DespesaService } from '../despesa/despesa.service';
import { TraducaoService } from '../translate/traducao.service';

@Injectable({
  providedIn: 'root'
})

export class DashBoardService {

    constructor(private receitaService: ReceitaService, private despesaService: DespesaService, private traducaoService : TraducaoService) {
    }

    listarReceitasPorSubcatergoarias(): GraficoDTO[] {
        let dadosGrafico: GraficoDTO[] = [];

        this.receitaService.receitas.forEach((r) => {
            if (r.subcategoria && !dadosGrafico.some(dg => this.traducaoService.translate.instant(dg.name) === this.traducaoService.translate.instant(r.subcategoria ?? '')))
            {
                dadosGrafico.push(new GraficoDTO(this.traducaoService.translate.instant(r.subcategoria), r.valor!));
            }
            else
            {
                let index = dadosGrafico.findIndex((dg) => this.traducaoService.translate.instant(dg.name) === this.traducaoService.translate.instant(r.subcategoria ?? ''));
                dadosGrafico[index].value! += r.valor!;
            }
        })

        return dadosGrafico;
    }

    
    listarDespesasPorSubcatergoarias(): GraficoDTO[] {
        let dadosGrafico: GraficoDTO[] = [];

        this.despesaService.despesas.forEach((d) => {
            if (d.subcategoria && !dadosGrafico.some(dg => this.traducaoService.translate.instant(dg.name) === this.traducaoService.translate.instant(d.subcategoria ?? '')))
            {
                dadosGrafico.push(new GraficoDTO(this.traducaoService.translate.instant(d.subcategoria), d.valor!));
            }
            else
            {
                let index = dadosGrafico.findIndex((dg) => this.traducaoService.translate.instant(dg.name) === this.traducaoService.translate.instant(d.subcategoria ?? ''));
                dadosGrafico[index].value! += d.valor!;
            }
        })

        return dadosGrafico;
    }


    buscarFluxoCaixa(): GraficoDTO[] {
        let dadosGrafico: GraficoDTO[] = [];

        let totalDespesas = this.despesaService.despesas.reduce((valor, despesa) => valor + despesa.valor!, 0);
        let totalReceita = this.receitaService.receitas.reduce((valor, receita) => valor + receita.valor!, 0);
        let saldoPrevisto = totalReceita - totalDespesas;

        dadosGrafico.push( new GraficoDTO(this.traducaoService.translate.instant('RECEITA'), totalReceita));
        dadosGrafico.push( new GraficoDTO(this.traducaoService.translate.instant('DESPESA'), totalDespesas));
        dadosGrafico.push( new GraficoDTO(this.traducaoService.translate.instant('DASHBOARD_TEXTOS.SALDO_PREVISTO'), saldoPrevisto));

        return dadosGrafico;
    }
}