import { ContaBancariaTipoService } from './conta-bancaria-tipo.service';
import { Injectable } from '@angular/core';
import { TraducaoService } from '../translate/traducao.service';
import { BehaviorSubject } from 'rxjs';
import { ContaBancaria } from './../../models/conta-bancaria/conta-bancaria.model';
import { ContaBancariaStatus } from '../../enums/conta-bancaria-status.enum';
import { FiltroContaBancaria } from '../../models/filtro/filtro-conta-bancaria.model';
import { ContaBancariaListaDTO } from '../../dtos/conta-bancaria/conta-bancaria-lista.dto';
import { ContaBancariaMapper } from '../../mappers/conta-bancaria/conta-bancaria.mapper';
import { ContaBancariaEdicaoDTO } from '../../dtos/conta-bancaria/conta-bancaria-edicao.dto';

@Injectable({
  providedIn: 'root'
})

export class ContaBancariaService {
  contaBancarias: ContaBancaria[] = [];
  private contaBancariasSubject = new BehaviorSubject<ContaBancaria[]>([]);
  private locale: string;
  private currency: string = 'BRL';
  
  contaBancarias$ = this.contaBancariasSubject.asObservable();

  constructor(private traducaoService: TraducaoService, contaBancariaTipoService: ContaBancariaTipoService) {
      this.locale = this.traducaoService.buscarLocal();
      this.currency =  this.locale === 'en-US' ? 'USD' : this.locale === 'es-ES' ? 'ARS' : 'BRL';
      this.contaBancarias.push(new ContaBancaria(1, 'teste',  100, "Itaú", contaBancariaTipoService.buscarPorDescricao("Corrente"), ContaBancariaStatus.Ativa));
      this.contaBancariasSubject.next(this.contaBancarias);
  }

  salvar(contaBancaria : ContaBancaria)  {
    contaBancaria.id = this.contaBancarias.length + 1;
    contaBancaria.status = ContaBancariaStatus.Ativa;
    contaBancaria.saldoAtual = contaBancaria.saldoInicial;
    this.contaBancarias.push(contaBancaria);
    this.contaBancariasSubject.next(this.contaBancarias);
  }

  editar(contaBancariaEdicao: ContaBancariaEdicaoDTO) {
    const index = this.contaBancarias.findIndex(d => d.id === contaBancariaEdicao.id);

    if (index >= 0) {
       this.contaBancarias[index].descricao = contaBancariaEdicao.descricao;
       this.contaBancarias[index].tipo = contaBancariaEdicao.tipo;
       this.contaBancarias[index].banco = contaBancariaEdicao.banco;
    }

    this.contaBancariasSubject.next(this.contaBancarias);
  }

  alterarStatus(id: number) {
    const index = this.contaBancarias.findIndex(d => d.id === id);

     if (index >= 0) {
      if(this.contaBancarias[index].status == ContaBancariaStatus.Ativa) {
        this.contaBancarias[index].status = ContaBancariaStatus.Inativa;
      } 
      else {
        this.contaBancarias[index].status = ContaBancariaStatus.Ativa;
      }
    }

    this.contaBancariasSubject.next(this.contaBancarias);
  }

  listContaBancariasDTO(filtro: FiltroContaBancaria): ContaBancariaListaDTO[] {
    this.contaBancarias$.subscribe(d => this.contaBancarias = d);
    
    const contaBancariaFiltradas = this.filtrarContaBancarias(filtro);
    return ContaBancariaMapper.mapperContaBancariaListaDTO(contaBancariaFiltradas, this.locale, this.currency);
  }

  buscarContaBancariaEdicaoPorId(id: number): ContaBancariaEdicaoDTO {
    const contaBancaria = this.contaBancarias.find(d => d.id === id);
    
    if(contaBancaria) {
      return ContaBancariaMapper.mapperContaBancariaEdicaoDTO(contaBancaria);
    }

    return new ContaBancariaEdicaoDTO();
  }

  buscarContaBancariaPorId(id: number): ContaBancaria {
    const contaBancaria = this.contaBancarias.find(d => d.id === id);

    if(contaBancaria) {
      return contaBancaria;
    }

    return new ContaBancaria();
  }

  private filtrarContaBancarias(filtro: FiltroContaBancaria): ContaBancaria[] {
   
    return this.contaBancarias.filter(contaBancaria => {

      if(filtro.id && contaBancaria.id !== filtro.id) {
        return false;
      }

      if(filtro.descricao && !contaBancaria.descricao?.toLowerCase().includes(filtro.descricao.toLowerCase())) {
        return false;
      }

      if(filtro.status && contaBancaria.status !== filtro.status) {
        return false;
      }

      return true;
    });
  }
}