import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BandeiraCartaoService {

    private bandeiras = [
        {value: 1, label: "Visa", iconPath: "..\\..\\assets\\img\\bandeiras-cartao\\master-card.png"},
        {value: 2, label: "Mastercard", iconPath: "..\\..\\assets\\img\\bandeiras-cartao\\visa.png"},
    ]

    listarBandeiras() {
        return this.bandeiras;
    }

    buscarBaneiraPorDescricao(descricao: string ){
        var bandeira = this.bandeiras.find(bandeira => bandeira.label === descricao);
        
        return bandeira?.label ?? "";
    }
}