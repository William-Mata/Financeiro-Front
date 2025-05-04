import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormaPagamentoService {

    private formasPagamentos = [
        {label: "Boleto"},
        {label: "Cartão de Crédito"},
        {label: "Cartão de Débito"},
        {label: "Dinheiro"},
        {label: "Trasferência Bancária"},
        {label: "PIX"},
    ]

    listarFormasPagamentos() {
        return this.formasPagamentos;
    }
}