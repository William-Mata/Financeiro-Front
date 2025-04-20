import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DespesaMapper } from './../../core/mappers/despesa/despesa.mapper';
import { Despesa } from '../../core/models/despesa/despesa.model';
import { DespesaListDTO } from '../../core/dtos/despesa/despesa-list.dto';

@Component({
  selector: 'app-despesa',
  imports: [FormsModule, CommonModule],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})

export class DespesaComponent {
  despesas: DespesaListDTO[] = [];
  despesa: Despesa = new Despesa();
  
  cadastrarDespesa(){
    let novaDespesa = new Despesa(
      this.despesas.length + 1,
      'Despesa 1',
      100,
      new Date(),
      new Date(),
      'Alimentação',
      'Pendente'
    );
    
    this.despesas.push(DespesaMapper.toListDto(novaDespesa));

    console.table(this.despesas);
  }

}
