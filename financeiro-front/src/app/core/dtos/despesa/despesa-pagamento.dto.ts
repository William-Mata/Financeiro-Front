import { Cartao } from "../../models/cartao/cartao.model";
import { ContaBancaria } from "../../models/conta-bancaria/conta-bancaria.model";

export class DespesaPagamentoDTO {
    id?: number;
    valorPago?: number;
    dataPagamento?: Date;
    formaPagamento?: string;
    contaBancaria?: ContaBancaria;
    cartao?: Cartao;
}