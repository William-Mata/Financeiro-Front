export class Cartao {

    id?: number;
    descricao?: string;
    diaFechamentoFatura?: number;
    limiteTotalInicial?: number;
    limiteTotalAtual?: number;
    limiteDisponivel?: number;
    bandeira?: string;
    tipo?: string;
    status?: string; 

    constructor(id?: number, descricao?: string, diaFechamentoFatura?: number, 
                limiteTotalInicial?: number, limiteDisponivel?: number,
                bandeira?: string, tipo?: string, status?: string) 
    {
        this.id = id;
        this.descricao = descricao;
        this.diaFechamentoFatura = diaFechamentoFatura;
        this.limiteTotalInicial = limiteTotalInicial;
        this.limiteTotalAtual = limiteTotalInicial;
        this.limiteDisponivel = limiteDisponivel;
        this.bandeira = bandeira;
        this.tipo = tipo;
        this.status = status;
    }
}