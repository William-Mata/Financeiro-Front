import { Despesa } from "../../models/despesa/despesa.model";
import { DespesaListaDTO } from "../../dtos/despesa/despesa-lista.dto";
import { DespesaEdicaoDTO } from "../../dtos/despesa/despesa-edicao.dto";
export class DespesaMapper {
 
  mapperDespesa(dto: any): Despesa {
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

  static mapperDespesaListaDTO (despesas: Despesa[], locale: string, currency : string) : DespesaListaDTO[] {
    return despesas
            .map(d => 
                  new DespesaListaDTO(
                      d.id,
                      d.descricao,
                      d.valor?.toLocaleString(locale, { style: "currency", currency}),
                      d.valorPago?.toLocaleString(locale, { style: "currency", currency}),
                      d.dataVencimento?.toLocaleDateString(locale),
                      d.dataPagamento?.toLocaleDateString(locale),
                      d.categoria,
                      d.subcategoria,
                      d.status)
                );
  }

  static mapperDespesaEdicaoDTO(despesa: Despesa): DespesaEdicaoDTO {
    return despesa  ?
                      new DespesaEdicaoDTO(
                        despesa.id,
                        despesa.descricao,
                        despesa.valor,
                        despesa.dataVencimento,
                        despesa.categoria,
                        despesa.subcategoria
                      ) 
                    : new DespesaEdicaoDTO();
  }
}