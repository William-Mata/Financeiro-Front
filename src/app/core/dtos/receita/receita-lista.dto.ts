export class ReceitaListaDTO {

    id?: number;
    descricao?: string;
    valor?: string;
    valorRecebido?: string;
    dataVencimento?: string;
    dataRecebimento?: string;
    categoria?: string; 
    subcategoria?: string; 
    status?: string;

    constructor(
        id?: number,
        descricao?: string,
        valor?: string,
        valorRecebido?: string,
        dataVencimento?: string,
        dataRecebimento?: string,
        categoria?: string,
        subcategoria?: string,
        status?: string
    ) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.valorRecebido = valorRecebido;
        this.dataVencimento = dataVencimento;
        this.dataRecebimento = dataRecebimento;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.status = status;
    }
}