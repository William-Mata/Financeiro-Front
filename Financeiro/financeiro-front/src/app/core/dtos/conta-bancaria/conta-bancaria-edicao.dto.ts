export class ContaBancariaEdicaoDTO {

    id?: number;
    descricao?: string;
    banco?: string;
    tipo?: string;

    constructor(id?: number, descricao?: string,  banco?: string, tipo?: string, ) 
    {
        this.id = id;
        this.descricao = descricao;
        this.banco = banco;
        this.tipo = tipo;
    }
}