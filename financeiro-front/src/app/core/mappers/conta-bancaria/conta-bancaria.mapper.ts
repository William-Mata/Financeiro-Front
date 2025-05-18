import { ContaBancaria } from './../../models/conta-bancaria/conta-bancaria.model';
import { ContaBancariaListaDTO } from "../../dtos/conta-bancaria/conta-bancaria-lista.dto";
import { ContaBancariaEdicaoDTO } from '../../dtos/conta-bancaria/conta-bancaria-edicao.dto';

export class ContaBancariaMapper {
 
  mapperContaBancaria(dto: any): ContaBancaria {
    return new ContaBancaria(
      dto.id,
      dto.descricao,
      dto.saldoInicial,
      dto.banco,
      dto.tipo,
      dto.status
    );
  }

  static mapperContaBancariaListaDTO (contaBancaria: ContaBancaria[], locale: string, currency : string) : ContaBancariaListaDTO[] {
    return contaBancaria
            .map(d => 
                  new ContaBancariaListaDTO(
                      d.id,
                      d.descricao,
                      d.saldoInicial?.toLocaleString(locale, { style: "currency", currency}),
                      d.saldoAtual?.toLocaleString(locale, { style: "currency", currency}),
                      d.banco,
                      d.tipo,
                      d.status)
                );
  }

  static mapperContaBancariaEdicaoDTO(contaBancaria: ContaBancaria): ContaBancariaEdicaoDTO {
    return contaBancaria  ?
                      new ContaBancariaEdicaoDTO(
                        contaBancaria.id,
                        contaBancaria.descricao,
                        contaBancaria.banco,
                        contaBancaria.tipo,
                      ) 
                    : new ContaBancariaEdicaoDTO();
  }
}