export class CartaoListaDTO {

    id?: number;
    descricao?: string;
    diaFechamentoFatura?: number;
    limiteTotalAtual?: string;
    limiteDisponivel?: string;
    bandeira?: string;
    tipo?: string;
    status?: string; 

    constructor(id?: number, descricao?: string, diaFechamentoFatura?: number, 
                limiteTotalAtual?: string, limiteDisponivel?: string,
                bandeira?: string, tipo?: string, status?: string) 
    {
        this.id = id;
        this.descricao = descricao;
        this.diaFechamentoFatura = diaFechamentoFatura;
        this.limiteTotalAtual = limiteTotalAtual;
        this.limiteDisponivel = limiteDisponivel;
        this.bandeira = bandeira;
        this.tipo = tipo;
        this.status = status;
    }
}