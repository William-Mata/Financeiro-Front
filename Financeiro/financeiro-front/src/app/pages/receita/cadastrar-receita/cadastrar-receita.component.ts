import { Component } from '@angular/core';
import { Receita } from '../../../core/models/receita/receita.model';
import { ReceitaService } from '../../../core/services/receita/receita.service';
import { CategoriaService } from '../../../core/services/categoria/categoria.service';
import { ImportacaoPadrao } from '../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../shared/imports/importacao.formulario.shared';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../core/services/translate/traducao-notificao.service';

@Component({
  selector: 'app-cadastrar-receita',
  imports: [   
    ImportacaoPadrao,
    ImportacaoFormulario,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastrar-receita.component.html',
  styleUrl: './cadastrar-receita.component.scss'
})

export class CadastrarReceitaComponent {
  receita: Receita = new Receita();
  categorias: any[] = [];
  
  constructor(private categoriaService: CategoriaService, private receitaService: ReceitaService,
              private traducaoNotificacaoService: TraducaoNotificacaoService) {}

  ngOnInit(): void {
    this.categorias = this.categoriaService.listarCategoriasReceitas();
  }
  
  salvar(){
    this.receitaService.salvar(this.receita);
    this.receita = new Receita();
    this.traducaoNotificacaoService.success('NOTIFICACAO.RECEITA_CADASTRADA', '');
  }
}
