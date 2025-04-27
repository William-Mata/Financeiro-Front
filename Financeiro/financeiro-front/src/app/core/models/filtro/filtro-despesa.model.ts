import { Filtro } from "./filtro.model";

export class FiltroDespesa extends Filtro {
    dataPagamento?: Date;


    override reset() {
        super.reset(); 
    
        this.dataPagamento = undefined;
    }
}