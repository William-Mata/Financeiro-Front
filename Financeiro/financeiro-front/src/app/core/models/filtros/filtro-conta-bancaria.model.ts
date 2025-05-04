import { Filtro } from "./filtro.model";

export class FiltroContaBancaria extends Filtro {
    
    banco?: string; 
    status?: string; 
    tipo?: string; 

    constructor(status?: string, tipo?: string, banco?: string) {
        super();

        this.status = status;
        this.tipo = tipo;
        this.banco = banco;
    }

    override reset() {
        super.reset(); 
        
        this.banco = undefined;
        this.status = undefined;
        this.tipo = undefined;
    }
}