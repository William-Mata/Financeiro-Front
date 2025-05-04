import { Cartao } from './../cartao/cartao.model';
import { ContaBancaria } from './../conta-bancaria/conta-bancaria.model';
import { TransacaoTipo } from "../../enums/transacao-tipo.enum";

export class Transacao {

    id?: number;
    idDespesa?: number;
    idReceita?: number;
    formaPagamento?: string;
    formaRecebimento?: string;
    valor?: number;
    tipoTransacao?: TransacaoTipo;
    dataTransacao?: Date;
    contaBancaria?: ContaBancaria;
    cartao?: Cartao;
    isEstorno?: boolean;
    idTransacaoEstorno?: number;

   
    constructor(id?: number, idDespesa?: number, idReceita?: number, formaPagamento?: string, 
                formaRecebimento?: string, valor?: number, tipoTransacao?: TransacaoTipo, 
                dataTransacao?: Date, contaBancaria?: ContaBancaria, cartao?: Cartao, isEstorno?: boolean) {

        this.id = id;
        this.idDespesa = idDespesa;
        this.idReceita = idReceita;
        this.formaPagamento = formaPagamento;
        this.formaRecebimento = formaRecebimento;
        this.valor = valor;
        this.tipoTransacao = tipoTransacao;
        this.dataTransacao = dataTransacao;
        this.contaBancaria = contaBancaria;
        this.cartao = cartao;
        this.isEstorno = isEstorno;
    }
}