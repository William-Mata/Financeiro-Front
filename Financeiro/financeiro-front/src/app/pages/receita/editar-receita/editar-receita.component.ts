import { ToastrService } from 'ngx-toastr';
import { Component, Input, SimpleChanges } from '@angular/core';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { CategoriaService } from '../../../core/services/categoria/categoria.service';
import { ReceitaService } from '../../../core/services/receita/receita.service';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';
import { ReceitaEdicaoDTO } from '../../../core/dtos/receita/receita-edicao.dto';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-editar-receita',
  imports: [
      ImportacaoPadrao,
      ImportacaoFormulario,
      NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './editar-receita.component.html',
  styleUrl: './editar-receita.component.scss'
})

export class EditarReceitaComponent {
  @Input() idEditar: number = 0;
  receita: ReceitaEdicaoDTO = new ReceitaEdicaoDTO();
  categorias: any[] = [];
  
  constructor (private categoriaService: CategoriaService, private receitaService: ReceitaService, private traducaoNotificacaoService : TraducaoNotificacaoService) {
    this.categorias = this.categoriaService.listarCategoriasReceitas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.receita = new ReceitaEdicaoDTO(); 

    if (changes['idEditar'] && changes['idEditar'].currentValue > 0) {
      this.receita = this.receitaService.buscarReceitaEdicaoPorId(this.idEditar);
    }
  }
 
  editar() {
    this.receitaService.editar(this.receita);
    this.traducaoNotificacaoService.success('NOTIFICACAO.RECEITA_EDITADA', '');
  }

}
