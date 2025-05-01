import { Component, Input, SimpleChanges } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { BancoService } from '../../../core/services/banco/banco.service';
import { CartaoTipoService } from '../../../core/services/cartao/cartao-tipo.service';
import { CartaoEdicaoDTO } from '../../../core/dtos/cartao/cartao-edicao.dto';
import { CartaoService } from '../../../core/services/cartao/cartao.service';
import { BandeiraCartaoService } from '../../../core/services/bandeira-cartao/bandeira-cartao.service';

@Component({
  selector: 'app-editar-cartao',
  imports: [
      ImportacaoPadrao,
      ImportacaoFormulario
  ],
  providers: [provideNgxMask()],
  templateUrl: './editar-cartao.component.html',
  styleUrl: './editar-cartao.component.scss'
})

export class EditarCartaoComponent {
  @Input() idEditar: number = 0;
  cartao: CartaoEdicaoDTO = new CartaoEdicaoDTO();
  bandeiras: any[] = [];
  tipos: any[] = [];
  
  constructor (private bandeiraCartaoService: BandeiraCartaoService, private cartaoTipoService: CartaoTipoService, 
              private cartaoService: CartaoService, private traducaoNotificacaoService : TraducaoNotificacaoService) {
    this.bandeiras = this.bandeiraCartaoService.listarBandeiras();
    this.tipos = this.cartaoTipoService.listarTipos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cartao = new CartaoEdicaoDTO(); 

    if (changes['idEditar'] && changes['idEditar'].currentValue > 0) {
      this.cartao = this.cartaoService.buscarCartaoEdicaoPorId(this.idEditar);
    }
  }
 
  editar() {
    this.cartaoService.editar(this.cartao);
    this.traducaoNotificacaoService.success('NOTIFICACAO.CARTAO_EDITADO', '');
  }
}
