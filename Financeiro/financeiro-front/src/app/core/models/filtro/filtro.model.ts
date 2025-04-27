export class Filtro {
    
    id?: number;
    descricao?: string;
    valor?: number;
    dataVencimento?: Date;
    categoria?: string; 
    subcategoria?: string;
    status?: string; 

    paginaAtual?: number;
    quantidadePorPagina?: number;
    ordenarPor?: string;

    reset() {
        this.id = undefined;
        this.descricao = undefined;
        this.valor = undefined;
        this.dataVencimento = undefined;
        this.categoria = undefined;
        this.subcategoria = undefined;
        this.status = undefined;
        this.paginaAtual = undefined;
        this.quantidadePorPagina = undefined;
        this.ordenarPor = undefined;
    }
}