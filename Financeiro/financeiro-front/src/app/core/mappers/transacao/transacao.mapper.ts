import { TransacaoListaDTO } from "../../dtos/transacao/transacao-lista.dto";
import { Transacao } from "../../models/transacao/transacao.model";

export class TransacaoMapper {
  
  static mapperTransacaoListaDTO (transacaos: Transacao[], locale: string, currency : string) : TransacaoListaDTO[] {
    return transacaos
            .map(t => 
                  new TransacaoListaDTO(
                      t.id,
                      t.idDespesa,
                      t.idReceita,
                      t.formaPagamento,
                      t.formaRecebimento,
                      t.valor?.toLocaleString(locale, { style: "currency", currency}),
                      t.tipoTransacao,
                      t.dataTransacao?.toLocaleDateString(locale),
                      t.contaBancaria?.descricao,
                      t.isEstorno)
                );
  }
}