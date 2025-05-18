import { CartaoEdicaoDTO } from '../../dtos/cartao/cartao-edicao.dto';
import { CartaoListaDTO } from '../../dtos/cartao/cartao-lista.dto';
import { Cartao } from '../../models/cartao/cartao.model';

export class CartaoMapper {
 
  mapperCartao(dto: any): Cartao {
    return new Cartao(
      dto.id,
      dto.descricao,
      dto.diaFechamentoFatura,
      dto.limiteTotalInicial,
      dto.limiteDisponivel,
      dto.bandeira,
      dto.status,
      dto.tipo
    );
  }

  static mapperCartaoListaDTO (cartao: Cartao[], locale: string, currency : string) : CartaoListaDTO[] {
    return cartao
            .map(d => 
                  new CartaoListaDTO(
                    d.id,
                    d.descricao,
                    d.diaFechamentoFatura,
                    d.limiteTotalAtual?.toLocaleString(locale, { style: "currency", currency}),
                    d.limiteDisponivel?.toLocaleString(locale, { style: "currency", currency}),
                    d.bandeira,
                    d.tipo,
                    d.status)
                );
  }

  static mapperCartaoEdicaoDTO(cartao: Cartao): CartaoEdicaoDTO {
    return cartao  ?
                      new CartaoEdicaoDTO(
                        cartao.id,
                        cartao.descricao,
                        cartao.diaFechamentoFatura,
                        cartao.limiteTotalAtual,
                        cartao.limiteDisponivel,
                        cartao.bandeira,
                        cartao.tipo
                      ) 
                    : new CartaoEdicaoDTO();
  }
}