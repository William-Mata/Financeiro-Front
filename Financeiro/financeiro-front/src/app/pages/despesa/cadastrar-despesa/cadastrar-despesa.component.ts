import { Component } from '@angular/core';
import { Despesa } from '../../../core/models/despesa/despesa.model';
import { DespesaService } from '../../../core/services/despesa/despesa.service';
import { CategoriaService } from '../../../core/services/categoria/categoria.service';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';

@Component({
  selector: 'app-cadastrar-despesa',
  imports: [   
    ImportacaoPadrao,
    ImportacaoFormulario,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastrar-despesa.component.html',
  styleUrl: './cadastrar-despesa.component.scss'
})

export class CadastrarDespesaComponent {
  despesa: Despesa = new Despesa();
  categorias: any[] = [];
  
  constructor(private categoriaService: CategoriaService, private despesaService: DespesaService,
              private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  ngOnInit(): void {
    this.categorias = this.categoriaService.listarCategoriasDespesas();
  }
  
  salvar(){
    this.despesaService.salvar(this.despesa);
    this.despesa = new Despesa();
    this.traducaoNotificacaoService.success('NOTIFICACAO.DESPESA_CADASTRADA', ' ');
  }
}
