export class Despesa {

    id?: number;
    descricao?: string;
    valor?: number;
    dataVencimento?: Date;
    dataPagamento?: Date;
    categoria?: string; // 'ALIMENTACAO' | 'LAZER' | 'TRANSPORTE' | 'EDUCACAO' | 'SAUDE' | 'OUTROS'
    status?: string; // 'PAGO' | 'PENDENTE' | 'VENCIDO'

  
    constructor(id?: number, descricao?: string, valor?: number, 
                dataVencimento?: Date, dataPagamento?: Date, 
                categoria?: string, status?: string) 
    {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.dataVencimento = dataVencimento;
        this.dataPagamento = dataPagamento;
        this.categoria = categoria;
        this.status = status;
    }
}