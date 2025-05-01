import { Filtro } from "./filtro.model";

export class FiltroReceita extends Filtro {
    
    valor?: number;
    categoria?: string; 
    subcategoria?: string;
    status?: string; 
    dataVencimento?: Date;
    dataRecebimento?: Date;

    override reset() {
        super.reset(); 
    
        this.valor = undefined;
        this.categoria = undefined;
        this.subcategoria = undefined;
        this.status = undefined;
        this.dataVencimento = undefined;
        this.dataRecebimento= undefined;
    }
}