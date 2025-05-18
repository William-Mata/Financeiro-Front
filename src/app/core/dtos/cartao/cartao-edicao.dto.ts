export class CartaoEdicaoDTO {

    id?: number;
    descricao?: string;
    diaFechamentoFatura?: number;
    limiteTotalAtual?: number;
    limiteDisponivel?: number;
    bandeira?: string;
    tipo?: string;

    constructor(id?: number, descricao?: string, diaFechamentoFatura?: number, 
                limiteTotalAtual?: number, limiteDisponivel?: number,
                bandeira?: string, tipo?: string) 
    {
        this.id = id;
        this.descricao = descricao;
        this.diaFechamentoFatura = diaFechamentoFatura;
        this.limiteTotalAtual = limiteTotalAtual;
        this.limiteDisponivel = limiteDisponivel;
        this.bandeira = bandeira;
        this.tipo = tipo;
    }
}