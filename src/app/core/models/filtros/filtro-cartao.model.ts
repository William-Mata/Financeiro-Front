import { Filtro } from "./filtro.model";

export class FiltroCartao extends Filtro {
    
    banco?: string; 
    status?: string; 
    tipo?: string; 

    override reset() {
        super.reset(); 
        
        this.banco = undefined;
        this.status = undefined;
        this.tipo = undefined;
    }
}