export class ReceitaEdicaoDTO {

    id?: number;
    descricao?: string;
    valor?: number;
    dataVencimento?: Date;
    categoria?: string; 
    subcategoria?: string; 

    constructor(
        id?: number,
        descricao?: string,
        valor?: number,
        dataVencimento?: Date,
        categoria?: string,
        subcategoria?: string
    ) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.dataVencimento = dataVencimento;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
    }
}