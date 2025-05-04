import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormaRecebimentoService {

    private formasRecebimentos = [
        {label: "Boleto"},
        {label: "Cartão de Crédito"},
        {label: "Cartão de Débito"},
        {label: "Dinheiro"},
        {label: "Trasferência Bancária"},
        {label: "PIX"},
    ]

    listarFormasRecebimentos() {
        return this.formasRecebimentos;
    }
}
