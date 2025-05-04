import { TransacaoTipo } from "../../enums/transacao-tipo.enum";

export class TransacaoListaDTO {

    id?: number;
    idDespesa?: number;
    idReceita?: number;
    formaPagamento?: string;
    formaRecebimento?: string;
    valor?: string;
    tipoTransacao?: TransacaoTipo;
    dataTransacao?: string;
    contaBancaria?: string;
    isEstorno?: boolean;
    idTransacaoEstorno?: number
    
    constructor(id?: number, idDespesa?: number, idReceita?: number, formaPagamento?: string, 
                formaRecebimento?: string, valor?: string, tipoTransacao?: TransacaoTipo, 
                dataTransacao?: string, contaBancaria?: string ,isEstorno?: boolean) {

        this.id = id;
        this.idDespesa = idDespesa;
        this.idReceita = idReceita;
        this.formaPagamento = formaPagamento;
        this.formaRecebimento = formaRecebimento;
        this.valor = valor;
        this.tipoTransacao = tipoTransacao;
        this.dataTransacao = dataTransacao;
        this.contaBancaria = contaBancaria;
        this.isEstorno = isEstorno;
    }
}