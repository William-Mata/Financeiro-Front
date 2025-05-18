import { Component } from '@angular/core';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../../shared/imports/importacao.formulario.shared';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../../core/services/translate/traducao-notificao.service';
import { Cartao } from '../../../../core/models/cartao/cartao.model';
import { CartaoService } from '../../../../core/services/cartao/cartao.service';
import { CartaoTipoService } from '../../../../core/services/cartao/cartao-tipo.service';
import { BandeiraCartaoService } from '../../../../core/services/bandeira-cartao/bandeira-cartao.service';

@Component({   
  standalone: true,
  selector: 'app-cadastrar-cartao',
  imports: [   
    ImportacaoPadrao,
    ImportacaoFormulario,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastrar-cartao.component.html',
  styleUrl: './cadastrar-cartao.component.scss'
})

export class CadastrarCartaoComponent {
  cartao: Cartao = new Cartao();
  bandeiras: any[] = [];
  tipos: any[] = [];
  
  constructor(private bandeiraCartaoService: BandeiraCartaoService, private cartaoService: CartaoService,
              private cartaoTipoService: CartaoTipoService, private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  ngOnInit(): void {
    this.bandeiras = this.bandeiraCartaoService.listarBandeiras();
    this.tipos = this.cartaoTipoService.listarTipos();
  }
  
  salvar(){
    this.cartaoService.salvar(this.cartao);
    this.cartao = new Cartao();
    this.traducaoNotificacaoService.success('NOTIFICACAO.CARTAO_CADASTRADO', '');
  }
}