import { Component, Input, SimpleChanges } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { CategoriaService } from '../../../core/services/categoria/categoria.service';
import { DespesaService } from '../../../core/services/despesa/despesa.service';
import { DespesaEdicaoDTO } from '../../../core/dtos/despesa/despesa-edicao.dto';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';

@Component({
  selector: 'app-editar-despesa',
  imports: [
      ImportacaoPadrao,
      ImportacaoFormulario,
      NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './editar-despesa.component.html',
  styleUrl: './editar-despesa.component.scss'
})

export class EditarDespesaComponent {
  @Input() idEditar: number = 0;
  despesa: DespesaEdicaoDTO = new DespesaEdicaoDTO();
  categorias: any[] = [];
  
  constructor (private categoriaService: CategoriaService, private despesaService: DespesaService, private traducaoNotificacaoService: TraducaoNotificacaoService) 
  {
    this.categorias = this.categoriaService.listarCategoriasDespesas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.despesa = new DespesaEdicaoDTO(); 

    if (changes['idEditar'] && changes['idEditar'].currentValue > 0) {
      this.despesa = this.despesaService.buscarDespesaEdicaoPorId(this.idEditar);
    }
  }
 
  editar() {
    this.despesaService.editar(this.despesa);
    this.traducaoNotificacaoService.success('NOTIFICACAO.DESPESA_EDITADA', '');
  }

}
