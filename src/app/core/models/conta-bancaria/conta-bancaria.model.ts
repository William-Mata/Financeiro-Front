export class ContaBancaria {

    id?: number;
    descricao?: string;
    saldoInicial?: number;
    saldoAtual?: number;
    banco?: string;
    tipo?: string;
    status?: string; 

    constructor(id?: number, descricao?: string, saldoInicial?: number,  
        banco?: string, tipo?: string, status?: string) 
    {
        this.id = id;
        this.descricao = descricao;
        this.saldoInicial = saldoInicial;
        this.saldoAtual = saldoInicial;
        this.banco = banco;
        this.tipo = tipo;
        this.status = status;
    }
}