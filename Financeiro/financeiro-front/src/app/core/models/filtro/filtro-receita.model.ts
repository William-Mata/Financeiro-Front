import { Filtro } from "./filtro.model";

export class FiltroReceita extends Filtro {
    dataRecebimento?: Date;


    override reset() {
        super.reset(); 
    
        this.dataRecebimento= undefined;
    }
}