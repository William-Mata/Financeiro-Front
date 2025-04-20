import { Despesa } from "../../models/despesa/despesa.model";
import { DespesaListDTO } from "../../dtos/despesa/despesa-list.dto";

export class DespesaMapper {

      static fromDto(dto: any): Despesa {
        return new Despesa(
          dto.id,
          dto.descricao,
          dto.valor,
          dto.dataPagamento,
          dto.dataVencimento,
          dto.categoria,
          dto.status
        );
      }
    
      static toListDto(model: Despesa): DespesaListDTO {
        return new DespesaListDTO(
          model.id,
          model.descricao,
          model.valor?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
          model.dataPagamento?.toLocaleDateString(),
          model.dataVencimento?.toLocaleDateString(),
          model.categoria,
          model.status
        );
      }

}