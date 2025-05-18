import { DespesaApiService } from './../../services/despesa-api.service';
import { Component } from '@angular/core';
import { Despesa } from '../../../../core/models/despesa/despesa.model';
import { DespesaService } from '../../../../core/services/despesa/despesa.service';
import { CategoriaService } from '../../../../core/services/categoria/categoria.service';
import { ImportacaoPadrao } from '../../../../shared/imports/importacao.padrao.shared';
import { ImportacaoFormulario } from '../../../../shared/imports/importacao.formulario.shared';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TraducaoNotificacaoService } from '../../../../core/services/translate/traducao-notificao.service';
import { TraducaoService } from '../../../../core/services/translate/traducao.service';

@Component({   
  standalone: true,
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
  
  constructor(private categoriaService: CategoriaService, 
              private despesaService: DespesaService,
              private despesaApiService: DespesaApiService,
              private traducaoNotificacaoService: TraducaoNotificacaoService, 
              private traducaoService: TraducaoService) {}

  ngOnInit(): void {
    this.categorias = this.categoriaService.listarCategoriasDespesas();
  }
  
  salvar(){
      // despesa.id = this.despesas.length + 1;
      // despesa.categoria = this.categoriaService.buscarCategoriaPorSubCategoriaDespesa(despesa.subcategoria);
      // despesa.status = TransacaoStatus.Pendente;
      // despesa.valor = Number.parseInt(despesa.valor!.toString());
      
      // this.despesas.push(despesa);
      // this.despesasSubject.next(this.despesas);

    this.despesaApiService.cadastrar(this.despesa).subscribe(() => {
      next: () => {
        this.traducaoNotificacaoService.success('NOTIFICACAO.DESPESA_CADASTRADA', ' ');
      }
      error: () => this.traducaoNotificacaoService.error('NOTIFICACAO.ERRO_DESPESA_CADASTRADA', ' ');
    });

    this.despesaService.salvar(this.despesa);
    this.despesa
    this.despesa = new Despesa();
    this.traducaoNotificacaoService.success('NOTIFICACAO.DESPESA_CADASTRADA', ' ');
  }

}
