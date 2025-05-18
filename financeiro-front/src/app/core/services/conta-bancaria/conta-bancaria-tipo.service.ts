import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContaBancariaTipoService {

  private tipos = [
    { id: 1, descricao: 'Corrente' },
    { id: 2, descricao: 'Poupança' },
    { id: 3, descricao: 'Investimento' },
    { id: 4, descricao: 'Salário' },
    { id: 5, descricao: 'Outros' }
  ]

  listarTipos() {
    return this.tipos;
  }

  buscarPorDescricao(descricao: string ){
    var tipo = this.tipos.find(tipo => tipo.descricao === descricao);

    return tipo?.descricao ?? "";
  }

}