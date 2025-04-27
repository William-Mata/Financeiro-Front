import { Receita } from "../../models/receita/receita.model";
import { ReceitaListaDTO } from "../../dtos/receita/receita-lista.dto";
import { ReceitaEdicaoDTO } from "../../dtos/receita/receita-edicao.dto";
export class ReceitaMapper {
 
  mapperReceita(dto: any): Receita {
    return new Receita(
      dto.id,
      dto.descricao,
      dto.valor,
      dto.valorRecebido,
      dto.dataVencimento,
      dto.dataRecebimento,
      dto.categoria,
      dto.subcategoria,
      dto.status
    );
  }

  static mapperReceitaListaDTO (receitas: Receita[], locale: string, currency : string) : ReceitaListaDTO[] {
    return receitas
            .map(d => 
                  new ReceitaListaDTO(
                      d.id,
                      d.descricao,
                      d.valor?.toLocaleString(locale, { style: "currency", currency}),
                      d.valorRecebido?.toLocaleString(locale, { style: "currency", currency}),
                      d.dataVencimento?.toLocaleDateString(locale),
                      d.dataRecebimento?.toLocaleDateString(locale),
                      d.categoria,
                      d.subcategoria,
                      d.status)
                );
  }

  static mapperReceitaEdicaoDTO(receita: Receita): ReceitaEdicaoDTO {
    return receita  ?
                      new ReceitaEdicaoDTO(
                        receita.id,
                        receita.descricao,
                        receita.valor,
                        receita.dataVencimento,
                        receita.categoria,
                        receita.subcategoria
                      ) 
                    : new ReceitaEdicaoDTO();
  }
}