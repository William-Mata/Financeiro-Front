import { Injectable } from '@angular/core';
import { TraducaoService } from '../translate/traducao.service';
import { BehaviorSubject } from 'rxjs';
import { Transacao } from '../../models/transacao/transacao.model';
import { TransacaoTipo } from '../../enums/transacao-tipo.enum';
import { DespesaPagamentoDTO } from '../../dtos/despesa/despesa-pagamento.dto';
import { ReceitaRecebimentoDTO } from '../../dtos/receita/receita-recebimento.dto';
import { TransacaoListaDTO } from '../../dtos/transacao/transacao-lista.dto';
import { TransacaoMapper } from '../../mappers/transacao/transacao.mapper';
import { ContaBancariaService } from '../conta-bancaria/conta-bancaria.service';
import { FiltroTransacao } from './../../models/filtros/filtro-transacao.model';

@Injectable({
  providedIn: 'root'
})

export class TransacaoService {
  transacoes: Transacao[] = [];
  private transacoesSubject = new BehaviorSubject<Transacao[]>([]);
  private locale: string;
  private currency: string = 'BRL';
  
  transacoes$ = this.transacoesSubject.asObservable();

  constructor(private traducaoService: TraducaoService, private contaBancariaService: ContaBancariaService) {
      this.locale = this.traducaoService.buscarLocal();
      this.currency =  this.locale === 'en-US' ? 'USD' : this.locale === 'es-ES' ? 'ARS' : 'BRL';
      this.transacoesSubject.next(this.transacoes);
  }

  pagar(despesa : DespesaPagamentoDTO): Transacao  {
    let transacao = new Transacao(this.transacoes.length + 1, 
                                  despesa.id, 
                                  undefined, 
                                  despesa.formaPagamento, 
                                  undefined, 
                                  despesa.valorPago, 
                                  TransacaoTipo.Despesa,
                                  despesa.dataPagamento, 
                                  despesa.contaBancaria,  
                                  despesa.cartao,
                                  false);

    this.transacoes.push(transacao);
    this.transacoesSubject.next(this.transacoes);

    if(despesa.contaBancaria){
      this.contaBancariaService.descontarSaldo(despesa.contaBancaria, despesa.valorPago!);
    }
    else if(despesa.cartao){
      this.contaBancariaService.descontarSaldo(despesa.cartao, despesa.valorPago!);
    }

    return transacao;
  }
  
  receber(receita : ReceitaRecebimentoDTO): Transacao  {
    let transacao = new Transacao(this.transacoes.length + 1,
                                  undefined,
                                  receita.id,
                                  undefined,
                                  receita.formaRecebimento,
                                  receita.valorRecebido,
                                  TransacaoTipo.Receita,
                                  receita.dataRecebimento,
                                  receita.contaBancaria,
                                  undefined,
                                  false);

    this.transacoes.push(transacao);
    this.transacoesSubject.next(this.transacoes);
    
    if(receita.contaBancaria){
      this.contaBancariaService.acrescentarSaldo(receita.contaBancaria, receita.valorRecebido!);
    }

    return transacao;
  }

  estornar(transacaoEstorno: Transacao) {
    let transacao = new Transacao(this.transacoes.length + 1,
                                  transacaoEstorno.idDespesa,
                                  transacaoEstorno.idReceita,
                                  transacaoEstorno.formaPagamento,
                                  transacaoEstorno.formaRecebimento,
                                  transacaoEstorno.valor,
                                  TransacaoTipo.Estorno,
                                  new Date(),
                                  transacaoEstorno.contaBancaria,
                                  transacaoEstorno.cartao,
                                  true);

    transacaoEstorno.idTransacaoEstorno = transacao.id;
    this.transacoes.push(transacao);
    this.transacoesSubject.next(this.transacoes);

    if(transacaoEstorno.contaBancaria && transacaoEstorno.tipoTransacao === TransacaoTipo.Despesa){
      this.contaBancariaService.acrescentarSaldo(transacaoEstorno.contaBancaria, transacaoEstorno.valor!);
    }
    else if(transacaoEstorno.cartao && transacaoEstorno.tipoTransacao === TransacaoTipo.Despesa){
      this.contaBancariaService.acrescentarSaldo(transacaoEstorno.cartao, transacaoEstorno.valor!);
    }
    else if(transacaoEstorno.contaBancaria && transacaoEstorno.tipoTransacao === TransacaoTipo.Receita){
      this.contaBancariaService.descontarSaldo(transacaoEstorno.contaBancaria, transacaoEstorno.valor!);
    }
  }

  listarTransacoes(filtro : FiltroTransacao): TransacaoListaDTO[] {
    const transacoesFiltradas = this.filtrarTransacoes(filtro);
    return TransacaoMapper.mapperTransacaoListaDTO(transacoesFiltradas, this.locale, this.currency);
  }

  private filtrarTransacoes(filtro: FiltroTransacao): Transacao[] {
      let transacoesFiltrada = this.transacoes.filter(transacao => {
  
        if(filtro.id && transacao.id !== filtro.id) {
          return false;
        }
  
        if(filtro.valor && (!transacao.valor || transacao.valor !== filtro.valor)) {
          return false;
        }
  
        return true;
      })
      
      return this.ordernarTransacoes(transacoesFiltrada, filtro);
    }

    private ordernarTransacoes(transacoes: Transacao[], filtro: FiltroTransacao): Transacao[] {
      const quantidadePorPagina = filtro.quantidadePorPagina ?? 10;
      const paginaAtual = filtro.paginaAtual && filtro.paginaAtual > 0 ? filtro.paginaAtual : 1;
      const skip = (paginaAtual - 1) * quantidadePorPagina;

      const ordenadas = transacoes.sort((a, b) => {
        if (filtro.ordenarPor === 'id') {
          return filtro.ordenarDesc ? a.id! - b.id! : b.id! - a.id!  ;
        }
        return 0;
      });
    
      return ordenadas.slice(skip, skip + quantidadePorPagina);
    }
}
