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
                                  transacaoEstorno.ContaBancaria,
                                  transacaoEstorno.Cartao,
                                  true);

    transacaoEstorno.idTransacaoEstorno = transacao.id;
    this.transacoes.push(transacao);
    this.transacoesSubject.next(this.transacoes);

    if(transacaoEstorno.ContaBancaria && transacaoEstorno.tipoTransacao === TransacaoTipo.Despesa){
      this.contaBancariaService.acrescentarSaldo(transacaoEstorno.ContaBancaria, transacaoEstorno.valor!);
    }
    else if(transacaoEstorno.Cartao && transacaoEstorno.tipoTransacao === TransacaoTipo.Despesa){
      this.contaBancariaService.acrescentarSaldo(transacaoEstorno.Cartao, transacaoEstorno.valor!);
    }
    else if(transacaoEstorno.ContaBancaria && transacaoEstorno.tipoTransacao === TransacaoTipo.Receita){
      this.contaBancariaService.descontarSaldo(transacaoEstorno.ContaBancaria, transacaoEstorno.valor!);
    }
  }

  listarTransacoes(): TransacaoListaDTO[] {
    this.transacoes$.subscribe(d => this.transacoes = d);
    return TransacaoMapper.mapperTransacaoListaDTO(this.transacoes, this.locale, this.currency);
  }

}
