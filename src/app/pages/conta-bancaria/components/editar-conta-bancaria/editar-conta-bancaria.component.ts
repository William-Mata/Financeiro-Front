import { Component, Input, SimpleChanges } from '@angular/core';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../../shared/imports/importacao.formulario.shared';
import { TraducaoNotificacaoService } from '../../../../core/services/translate/traducao-notificao.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { BancoService } from '../../../../core/services/banco/banco.service';
import { ContaBancariaTipoService } from '../../../../core/services/conta-bancaria/conta-bancaria-tipo.service';
import { ContaBancariaEdicaoDTO } from '../../../../core/dtos/conta-bancaria/conta-bancaria-edicao.dto';
import { ContaBancariaService } from '../../../../core/services/conta-bancaria/conta-bancaria.service';

@Component({   
  standalone: true,
  selector: 'app-editar-conta-bancaria',
  imports: [
      ImportacaoPadrao,
      ImportacaoFormulario
  ],
  providers: [provideNgxMask()],
  templateUrl: './editar-conta-bancaria.component.html',
  styleUrl: './editar-conta-bancaria.component.scss'
})

export class EditarContaBancariaComponent {
  @Input() idEditar: number = 0;
  contaBancaria: ContaBancariaEdicaoDTO = new ContaBancariaEdicaoDTO();
  bancos: any[] = [];
  tipos: any[] = [];
  
  constructor (private bancoService: BancoService, private contaBancariaTipoService: ContaBancariaTipoService, 
              private contaBancariaService: ContaBancariaService, private traducaoNotificacaoService : TraducaoNotificacaoService) {
    this.bancos = this.bancoService.listarBancos();
    this.tipos = this.contaBancariaTipoService.listarTipos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.contaBancaria = new ContaBancariaEdicaoDTO(); 

    if (changes['idEditar'] && changes['idEditar'].currentValue > 0) {
      this.contaBancaria = this.contaBancariaService.buscarContaBancariaEdicaoPorId(this.idEditar);
    }
  }
 
  editar() {
    this.contaBancariaService.editar(this.contaBancaria);
    this.traducaoNotificacaoService.success('NOTIFICACAO.CONTA_BANCARIA_EDITADA', '');
  }

}
