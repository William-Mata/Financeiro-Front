export class Receita {

    id?: number;
    descricao?: string;
    valor?: number;
    valorRecebido?: number;
    dataVencimento?: Date;
    dataRecebimento?: Date;
    categoria?: string; 
    subcategoria?: string;
    status?: string; 

    constructor(id?: number, descricao?: string, valor?: number, valorRecebido?: number, 
                dataVencimento?: Date, dataRecebimento?: Date, 
                categoria?: string, subcategoria?: string, status?: string) 
    {
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