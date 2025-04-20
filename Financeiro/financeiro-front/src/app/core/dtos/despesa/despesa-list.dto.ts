export class DespesaListDTO {

    id?: number;
    descricao?: string;
    valor?: string;
    dataVencimento?: string;
    dataPagamento?: string;
    categoria?: string; // 'ALIMENTACAO' | 'LAZER' | 'TRANSPORTE' | 'EDUCACAO' | 'SAUDE' | 'OUTROS'
    status?: string; // 'PAGO' | 'PENDENTE' | 'VENCIDO' 

    constructor(
        id?: number,
        descricao?: string,
        valor?: string,
        dataVencimento?: string,
        dataPagamento?: string,
        categoria?: string,
        status?: string
    ) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.dataVencimento = dataVencimento;
        this.dataPagamento = dataPagamento;
        this.categoria = categoria;
        this.status = status;
    }
}