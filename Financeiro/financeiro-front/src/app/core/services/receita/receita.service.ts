import { Injectable } from '@angular/core';
import { CategoriaService } from '../categoria/categoria.service';
import { TraducaoService } from '../translate/traducao.service';
import { BehaviorSubject } from 'rxjs';
import { Receita } from '../../models/receita/receita.model';
import { ReceitaListaDTO } from '../../dtos/receita/receita-lista.dto';
import { ReceitaEdicaoDTO } from '../../dtos/receita/receita-edicao.dto';
import { ReceitaRecebimentoDTO } from '../../dtos/receita/receita-recebimento.dto';
import { FiltroReceita } from '../../models/filtro/filtro-receita.model';
import { TransacaoStatus } from '../../enums/transacao-status.enum';
import { ReceitaMapper } from '../../mappers/receita/receita.mapper';

@Injectable({
  providedIn: 'root'
})

export class ReceitaService {
  receitas: Receita[] = [];
  private receitasSubject = new BehaviorSubject<Receita[]>([]);
  private locale: string;
  private currency: string = 'BRL';
  
  receitas$ = this.receitasSubject.asObservable();

  constructor(private categoriaService: CategoriaService, private traducaoService: TraducaoService) {
      this.locale = this.traducaoService.buscarLocal();
      this.currency =  this.locale === 'en-US' ? 'USD' : this.locale === 'es-ES' ? 'ARS' : 'BRL';
      this.receitas.push(new Receita(1, 'teste',  100, 0, new Date(), undefined, 'teste', 'teste', "Pendente"));
      this.receitasSubject.next(this.receitas);
  }

  salvar(receita : Receita)  {
    receita.id = this.receitas.length + 1;
    receita.categoria = this.categoriaService.buscarCategoriaPorSubCategoriaReceita(receita.subcategoria);
    receita.status = TransacaoStatus.Pendente;
    receita.valor = Number.parseInt(receita.valor!.toString());
    
    this.receitas.push(receita);
    this.receitasSubject.next(this.receitas);
  }

  editar(receitaEdicao: ReceitaEdicaoDTO) {
    const index = this.receitas.findIndex(d => d.id === receitaEdicao.id);

    if (index >= 0) {
      this.receitas[index].categoria = this.categoriaService.buscarCategoriaPorSubCategoriaReceita(receitaEdicao.subcategoria);
      this.receitas[index].descricao = receitaEdicao.descricao;
      this.receitas[index].valor = receitaEdicao.valor;
      this.receitas[index].dataVencimento = receitaEdicao.dataVencimento;
      this.receitas[index].subcategoria = receitaEdicao.subcategoria;
    }

    this.receitasSubject.next(this.receitas);
  }

  deletar(id: number) {
    this.receitas = this.receitas.filter(d => d.id !== id);
    this.receitasSubject.next(this.receitas);
  }

  receber(receitaRecebimento : ReceitaRecebimentoDTO) {
    if(receitaRecebimento.id) {
      const receita = this.receitas.find(d => d.id === receitaRecebimento.id);
      
      if (receita) {
        receita.status = TransacaoStatus.Recebido;
        receita.dataRecebimento = receitaRecebimento.dataRecebimento;
        receita.valorRecebido = receitaRecebimento.valorRecebido;

        this.receitasSubject.next(this.receitas);
      }
    }
  }

  estornar(id: number) {
    const receita = this.receitas.find(d => d.id === id);

    if (receita) {
      receita.status = TransacaoStatus.Pendente;
      receita.dataRecebimento = undefined;
      receita.valorRecebido = undefined;
      this.receitasSubject.next(this.receitas);
    }
  }

  listReceitasDTO(filtro: FiltroReceita): ReceitaListaDTO[] {
    this.receitas$.subscribe(d => this.receitas = d);
    
    const receitaFiltradas = this.filtrarReceitas(filtro);
    return ReceitaMapper.mapperReceitaListaDTO(receitaFiltradas, this.locale, this.currency);
  }

  buscarReceitaEdicaoPorId(id: number): ReceitaEdicaoDTO {
    const receita = this.receitas.find(d => d.id === id);
    
    if(receita) {
      return ReceitaMapper.mapperReceitaEdicaoDTO(receita);
    }

    return new ReceitaEdicaoDTO();
  }

  private filtrarReceitas(filtro: FiltroReceita): Receita[] {
   
    return this.receitas.filter(receita => {

      if(filtro.id && receita.id !== filtro.id) {
        return false;
      }

      if(filtro.dataRecebimento && receita.dataRecebimento !== filtro.dataRecebimento) {
        return false;
      }

      if(filtro.dataVencimento && receita.dataVencimento !== filtro.dataVencimento) {
        return false;
      }

      if(filtro.descricao && !receita.descricao?.toLowerCase().includes(filtro.descricao.toLowerCase())) {
        return false;
      }

      if(filtro.status && receita.status !== filtro.status) {
        return false;
      }

      if(filtro.categoria && receita.categoria !== filtro.categoria) {
        return false;
      }

      if(filtro.subcategoria && receita.subcategoria !== filtro.subcategoria) {
        return false;
      }

      if(filtro.valor && (!receita.valor || receita.valor !== filtro.valor)) {
        return false;
      }

      return true;
    });
  }
}