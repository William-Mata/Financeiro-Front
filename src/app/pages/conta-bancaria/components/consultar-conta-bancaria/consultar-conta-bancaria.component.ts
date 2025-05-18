import { Component, EventEmitter, Output } from '@angular/core';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../../shared/imports/importacao.formulario.shared';
import { provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../../core/services/translate/traducao-notificao.service';
import { ContaBancariaService } from '../../../../core/services/conta-bancaria/conta-bancaria.service';
import { ContaBancariaListaDTO } from '../../../../core/dtos/conta-bancaria/conta-bancaria-lista.dto';
import { FiltroContaBancaria } from '../../../../core/models/filtros/filtro-conta-bancaria.model';

@Component({   
  standalone: true,
  selector: 'app-consultar-conta-bancaria',
  imports: [
    ImportacaoPadrao,
    ImportacaoFormulario,
  ],
  providers: [provideNgxMask()],
  templateUrl: './consultar-conta-bancaria.component.html',
  styleUrl: './consultar-conta-bancaria.component.scss',
})

export class ConsultarContaBancariaComponent {
  @Output() idEditar = new EventEmitter<number>();
  @Output() idConta = new EventEmitter<number>();

  contaBancarias: ContaBancariaListaDTO[] = [];  
  filtro: FiltroContaBancaria = new FiltroContaBancaria();

  constructor(private contaBancariaService: ContaBancariaService, private traducaoNotificacaoService: TraducaoNotificacaoService) {
    this.contaBancarias = this.contaBancariaService.listarContaBancarias(this.filtro);
  }
  
  ngOnInit(){
    this.contaBancariaService
    .contaBancarias$.subscribe(() => 
      this.contaBancarias = this.contaBancariaService.listarContaBancarias(this.filtro));
  }
  
  consultar(){
    this.contaBancarias = this.contaBancariaService.listarContaBancarias(this.filtro);
    this.traducaoNotificacaoService.success('NOTIFICACAO.CONSULTA_REALIZADA', '');
  }

  enviarEditar(idEditar: number){
    this.idEditar.emit(idEditar);
  }

  enviarAlterarStatus(idConta: number){
    this.idConta.emit(idConta);
  }
}