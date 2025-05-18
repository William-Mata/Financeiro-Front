export class DespesaListaDTO {

    id?: number;
    descricao?: string;
    valor?: string;
    valorPago?: string;
    dataVencimento?: string;
    dataPagamento?: string;
    categoria?: string; 
    subcategoria?: string; 
    status?: string;

    constructor(
        id?: number,
        descricao?: string,
        valor?: string,
        valorPago?: string,
        dataVencimento?: string,
        dataPagamento?: string,
        categoria?: string,
        subcategoria?: string,
        status?: string
    ) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.valorPago = valorPago;
        this.dataVencimento = dataVencimento;
        this.dataPagamento = dataPagamento;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.status = status;
    }
}