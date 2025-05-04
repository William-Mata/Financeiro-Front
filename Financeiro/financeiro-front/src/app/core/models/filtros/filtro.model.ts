export class Filtro {
    
    id?: number;
    descricao?: string;
    paginaAtual?: number;
    quantidadePorPagina?: number;
    ordenarPor?: string;
    ordenarDesc?: boolean;

    reset() {
        this.id = undefined;
        this.descricao = undefined;
       
        this.paginaAtual = undefined;
        this.quantidadePorPagina = undefined;
        this.ordenarPor = undefined;
        this.ordenarDesc = undefined;
    }
}