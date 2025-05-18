import { Filtro } from "./filtro.model";

export class FiltroTransacao extends Filtro {
    
    dataTransacaoInicio?: Date;
    dataTransacaoFim?: Date;
    tipoTransacao?: string;
    valor?: number;

   
    constructor(valor?: number, quantidadePorPagina?: number, paginaAtual?: number, ordenarPor?: string, orderDesc?: boolean) {
        super();
        
        this.valor = valor;
        this.quantidadePorPagina = quantidadePorPagina;
        this.paginaAtual = paginaAtual;
        this.ordenarPor = ordenarPor;
        this.quantidadePorPagina = quantidadePorPagina;
    }

    override reset() {
        super.reset(); 
    }
}