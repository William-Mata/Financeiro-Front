import { BandeiraCartaoService } from './../bandeira-cartao/bandeira-cartao.service';
import { Injectable } from '@angular/core';
import { TraducaoService } from '../translate/traducao.service';
import { BehaviorSubject } from 'rxjs';
import { Cartao } from '../../models/cartao/cartao.model';
import { CartaoStatus } from '../../enums/cartao-status.enum';
import { CartaoListaDTO } from '../../dtos/cartao/cartao-lista.dto';
import { CartaoMapper } from '../../mappers/cartao/cartao.mapper';
import { CartaoEdicaoDTO } from '../../dtos/cartao/cartao-edicao.dto';
import { CartaoTipoService } from './cartao-tipo.service';
import { FiltroCartao } from '../../models/filtros/filtro-cartao.model';

@Injectable({
  providedIn: 'root'
})

export class CartaoService {
  cartoes: Cartao[] = [];
  private cartoesSubject = new BehaviorSubject<Cartao[]>([]);
  private locale: string;
  private currency: string = 'BRL';
  
  cartoes$ = this.cartoesSubject.asObservable();

  constructor(private traducaoService: TraducaoService, cartaoTipoService: CartaoTipoService, bandeiraCartaoService: BandeiraCartaoService) {
      this.locale = this.traducaoService.buscarLocal();
      this.currency =  this.locale === 'en-US' ? 'USD' : this.locale === 'es-ES' ? 'ARS' : 'BRL';
      this.cartoes.push(new Cartao(1, 'teste', 5, 15000, 10000, bandeiraCartaoService.buscarBaneiraPorDescricao("Mastercard"),  cartaoTipoService.buscarPorDescricao("Crédito"), CartaoStatus.Desbloqueado));
      this.cartoesSubject.next(this.cartoes);
  }

  salvar(cartao : Cartao)  {
    cartao.id = this.cartoes.length + 1;
    cartao.status = CartaoStatus.Desbloqueado;
    cartao.limiteTotalAtual = cartao.limiteTotalInicial;
    this.cartoes.push(cartao);
    this.cartoesSubject.next(this.cartoes);
  }

  editar(cartaoEdicao: CartaoEdicaoDTO) {
    const index = this.cartoes.findIndex(d => d.id === cartaoEdicao.id);

    if (index >= 0) {
       this.cartoes[index].descricao = cartaoEdicao.descricao;
       this.cartoes[index].tipo = cartaoEdicao.tipo;
       this.cartoes[index].bandeira = cartaoEdicao.bandeira;

       if(this.cartoes[index].tipo == "Crédito") {
        this.cartoes[index].diaFechamentoFatura = cartaoEdicao.diaFechamentoFatura;
        this.cartoes[index].limiteTotalAtual = cartaoEdicao.limiteTotalAtual;
        this.cartoes[index].limiteDisponivel = cartaoEdicao.limiteDisponivel;
       }
       else {
        this.cartoes[index].diaFechamentoFatura = undefined;
        this.cartoes[index].limiteTotalAtual = undefined;
        this.cartoes[index].limiteDisponivel = undefined;
       }
    }

    this.cartoesSubject.next(this.cartoes);
  }

  alterarStatus(id: number) {
    const index = this.cartoes.findIndex(d => d.id === id);

     if (index >= 0) {
      if(this.cartoes[index].status == CartaoStatus.Desbloqueado) {
        this.cartoes[index].status = CartaoStatus.Bloqueado;
      } 
      else {
        this.cartoes[index].status = CartaoStatus.Desbloqueado;
      }
    }

    this.cartoesSubject.next(this.cartoes);
  }

  listCartoesDTO(filtro: FiltroCartao): CartaoListaDTO[] {
    this.cartoes$.subscribe(d => this.cartoes = d);
    
    const cartaoFiltradas = this.filtrarCartoes(filtro);
    return CartaoMapper.mapperCartaoListaDTO(cartaoFiltradas, this.locale, this.currency);
  }

  buscarCartaoEdicaoPorId(id: number): CartaoEdicaoDTO {
    const cartao = this.cartoes.find(d => d.id === id);
    
    if(cartao) {
      return CartaoMapper.mapperCartaoEdicaoDTO(cartao);
    }

    return new CartaoEdicaoDTO();
  }

  buscarCartaoPorId(id: number): Cartao {
    const cartao = this.cartoes.find(d => d.id === id);

    if(cartao) {
      return cartao;
    }

    return new Cartao();
  }

  private filtrarCartoes(filtro: FiltroCartao): Cartao[] {
   
    return this.cartoes.filter(cartao => {

      if(filtro.id && cartao.id !== filtro.id) {
        return false;
      }

      if(filtro.descricao && !cartao.descricao?.toLowerCase().includes(filtro.descricao.toLowerCase())) {
        return false;
      }

      if(filtro.status && cartao.status !== filtro.status) {
        return false;
      }

      return true;
    });
  }
}