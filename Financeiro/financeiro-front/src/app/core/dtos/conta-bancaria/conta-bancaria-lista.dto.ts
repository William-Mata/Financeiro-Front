export class ContaBancariaListaDTO {

    id?: number;
    descricao?: string;
    saldoInicial?: string;
    saldoAtual?: string;
    banco?: string;
    tipo?: string;
    status?: string; 

    constructor(id?: number, descricao?: string, saldoInicial?: string, saldoAtual?: string,  
        banco?: string, tipo?: string, status?: string) 
    {
        this.id = id;
        this.descricao = descricao;
        this.saldoInicial = saldoInicial;
        this.saldoAtual = saldoAtual;
        this.banco = banco;
        this.tipo = tipo;
        this.status = status;
    }
}