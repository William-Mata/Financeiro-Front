import { ContaBancaria } from './../../models/conta-bancaria/conta-bancaria.model';

export class ReceitaRecebimentoDTO {
    id?: number;
    valorRecebido?: number;
    dataRecebimento?: Date;
    formaRecebimento?: string;
    contaBancaria?: ContaBancaria;
}