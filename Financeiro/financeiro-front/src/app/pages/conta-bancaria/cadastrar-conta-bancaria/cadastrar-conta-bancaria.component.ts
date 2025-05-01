import { Component } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';
import { ContaBancaria } from '../../../core/models/conta-bancaria/conta-bancaria.model';
import { ContaBancariaService } from '../../../core/services/conta-bancaria/conta-bancaria.service';
import { BancoService } from './../../../core/services/banco/banco.service';
import { ContaBancariaTipoService } from './../../../core/services/conta-bancaria/conta-bancaria-tipo.service';

@Component({
  selector: 'app-cadastrar-conta-bancaria',
  imports: [   
    ImportacaoPadrao,
    ImportacaoFormulario,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastrar-conta-bancaria.component.html',
  styleUrl: './cadastrar-conta-bancaria.component.scss'
})

export class CadastrarContaBancariaComponent {
  contaBancaria: ContaBancaria = new ContaBancaria();
  bancos: any[] = [];
  tipos: any[] = [];
  
  constructor(private bancoService: BancoService, private contaBancariaService: ContaBancariaService,
              private contaBancariaTipoService: ContaBancariaTipoService, private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  ngOnInit(): void {
    this.bancos = this.bancoService.listarBancos();
    this.tipos = this.contaBancariaTipoService.listarTipos();
  }
  
  salvar(){
    this.contaBancariaService.salvar(this.contaBancaria);
    this.contaBancaria = new ContaBancaria();
    this.traducaoNotificacaoService.success('NOTIFICACAO.CONTA_BANCARIA_CADASTRADA', '');
  }
}