import { Injectable } from '@angular/core';
import { CategoriaService } from '../categoria/categoria.service';
import { TraducaoService } from '../translate/traducao.service';
import { BehaviorSubject } from 'rxjs';
import { Despesa } from '../../models/despesa/despesa.model';
import { DespesaListaDTO } from '../../dtos/despesa/despesa-lista.dto';
import { DespesaEdicaoDTO } from '../../dtos/despesa/despesa-edicao.dto';
import { DespesaPagamentoDto } from './../../dtos/despesa/despesa-pagamento.dto';
import { FiltroDespesa } from './../../models/filtro/filtro-despesa.model';
import { TransacaoStatus } from '../../enums/transacao-status.enum';
import { DespesaMapper } from '../../mappers/despesa/despesa.mapper';

@Injectable({
  providedIn: 'root'
})

export class DespesaService {
  despesas: Despesa[] = [];
  private despesasSubject = new BehaviorSubject<Despesa[]>([]);
  private locale: string;
  private currency: string = 'BRL';
  
  despesas$ = this.despesasSubject.asObservable();

  constructor(private categoriaService: CategoriaService, private traducaoService: TraducaoService) {
      this.locale = this.traducaoService.buscarLocal();
      this.currency =  this.locale === 'en-US' ? 'USD' : this.locale === 'es-ES' ? 'ARS' : 'BRL';
      this.despesas.push(new Despesa(1, 'teste',  100, 0, new Date(), undefined, 'teste', 'teste', "Pendente"));
      this.despesasSubject.next(this.despesas);
  }

  salvar(despesa : Despesa)  {
    despesa.id = this.despesas.length + 1;
    despesa.categoria = this.categoriaService.buscarCategoriaPorSubCategoriaDespesa(despesa.subcategoria);
    despesa.status = TransacaoStatus.Pendente;
    despesa.valor = Number.parseInt(despesa.valor!.toString());
    
    this.despesas.push(despesa);
    this.despesasSubject.next(this.despesas);
  }

  editar(desepsaEdicao: DespesaEdicaoDTO) {
    const index = this.despesas.findIndex(d => d.id === desepsaEdicao.id);

    if (index >= 0) {
      this.despesas[index].categoria = this.categoriaService.buscarCategoriaPorSubCategoriaDespesa(desepsaEdicao.subcategoria);
      this.despesas[index].descricao = desepsaEdicao.descricao;
      this.despesas[index].valor = desepsaEdicao.valor;
      this.despesas[index].dataVencimento = desepsaEdicao.dataVencimento;
      this.despesas[index].subcategoria = desepsaEdicao.subcategoria;
    }

    this.despesasSubject.next(this.despesas);
  }

  deletar(id: number) {
    this.despesas = this.despesas.filter(d => d.id !== id);
    this.despesasSubject.next(this.despesas);
  }

  pagar(despesaPagamento : DespesaPagamentoDto) {
    if(despesaPagamento.id) {
      const despesa = this.despesas.find(d => d.id === despesaPagamento.id);
      
      if (despesa) {
        despesa.status = TransacaoStatus.Pago;
        despesa.dataPagamento = despesaPagamento.dataPagamento;
        despesa.valorPago = despesaPagamento.valorPago;

        this.despesasSubject.next(this.despesas);
      }
    }
  }

  estornar(id: number) {
    const despesa = this.despesas.find(d => d.id === id);

    if (despesa) {
      despesa.status = TransacaoStatus.Pendente;
      despesa.dataPagamento = undefined;
      despesa.valorPago = undefined;
      this.despesasSubject.next(this.despesas);
    }
  }

  listDespesasDTO(filtro: FiltroDespesa): DespesaListaDTO[] {
    this.despesas$.subscribe(d => this.despesas = d);
    
    const despesaFiltradas = this.filtrarDespesas(filtro);
    return DespesaMapper.mapperDespesaListaDTO(despesaFiltradas, this.locale, this.currency);
  }

  buscarDespesaEdicaoPorId(id: number): DespesaEdicaoDTO {
    const despesa = this.despesas.find(d => d.id === id);
    
    if(despesa) {
      return DespesaMapper.mapperDespesaEdicaoDTO(despesa);
    }

    return new DespesaEdicaoDTO();
  }

  private filtrarDespesas(filtro: FiltroDespesa): Despesa[] {
   
    return this.despesas.filter(despesa => {

      if(filtro.id && despesa.id !== filtro.id) {
        return false;
      }

      if(filtro.dataPagamento && despesa.dataPagamento !== filtro.dataPagamento) {
        return false;
      }

      if(filtro.dataVencimento && despesa.dataVencimento !== filtro.dataVencimento) {
        return false;
      }

      if(filtro.descricao && !despesa.descricao?.toLowerCase().includes(filtro.descricao.toLowerCase())) {
        return false;
      }

      if(filtro.status && despesa.status !== filtro.status) {
        return false;
      }

      if(filtro.categoria && despesa.categoria !== filtro.categoria) {
        return false;
      }

      if(filtro.subcategoria && despesa.subcategoria !== filtro.subcategoria) {
        return false;
      }

      if(filtro.valor && (!despesa.valor || despesa.valor !== filtro.valor)) {
        return false;
      }

      return true;
    });
  }
}