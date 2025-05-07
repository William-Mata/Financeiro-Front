
import { Injectable } from '@angular/core';
import { GraficoDTO } from '../../dtos/grafico/grafico.dto';
import { ReceitaService } from './../receita/receita.service';
import { DespesaService } from '../despesa/despesa.service';

@Injectable({
  providedIn: 'root'
})

export class DashBoardService {

    constructor(private receitaService: ReceitaService, private despesaService: DespesaService) 
    {

    }

    listarReceitasPorSubcatergoarias(): GraficoDTO[] {
        let dadosGrafico: GraficoDTO[] = [];

        this.receitaService.receitas.forEach((r) => {
            if (r.subcategoria && !dadosGrafico.some(dg => dg.name === r.subcategoria))
            {
                dadosGrafico.push(new GraficoDTO(r.subcategoria, r.valor!));
            }
            else
            {
                let index = dadosGrafico.findIndex((dg) => dg.name === r.subcategoria);
                dadosGrafico[index].value! += r.valor!;
            }
        })

        return dadosGrafico;
    }

    
    listarDespesasPorSubcatergoarias(): GraficoDTO[] {
        let dadosGrafico: GraficoDTO[] = [];

        this.despesaService.despesas.forEach((d) => {
            if (d.subcategoria && !dadosGrafico.some(dg => dg.name === d.subcategoria))
            {
                dadosGrafico.push(new GraficoDTO(d.subcategoria, d.valor!));
            }
            else
            {
                let index = dadosGrafico.findIndex((dg) => dg.name === d.subcategoria);
                dadosGrafico[index].value! += d.valor!;
            }
        })

        return dadosGrafico;
    }
}