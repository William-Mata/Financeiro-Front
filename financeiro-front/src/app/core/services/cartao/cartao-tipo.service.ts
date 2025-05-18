import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartaoTipoService {

  private tipos = [
    { id: 1, descricao: 'Crédito' },
    { id: 2, descricao: 'Débito' },
  ]

  listarTipos() {
    return this.tipos;
  }

  buscarPorDescricao(descricao: string ){
    var tipo = this.tipos.find(tipo => tipo.descricao === descricao);

    return tipo?.descricao ?? "";
  }
}