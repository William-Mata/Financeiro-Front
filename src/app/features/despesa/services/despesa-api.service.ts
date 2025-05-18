import { FiltroDespesa } from '../../../core/models/filtros/filtro-despesa.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesa } from '../../../core/models/despesa/despesa.model';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class DespesaApiService {
    private readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    buscarPorId(id: number): Observable<Despesa> {
        return this.http.get<Despesa>(`${this.apiUrl}/Despesa/${id}`);
    }

    listar(filtro: FiltroDespesa): Observable<Despesa[]> {
        return this.http.post<Despesa[]>(`${this.apiUrl}/Despesa`, filtro);
    }

    cadastrar(despesa: Despesa): Observable<Despesa> {
        // despesa.id = this.despesas.length + 1;
        // despesa.categoria = this.categoriaService.buscarCategoriaPorSubCategoriaDespesa(despesa.subcategoria);
        // despesa.status = TransacaoStatus.Pendente;
        // despesa.valor = Number.parseInt(despesa.valor!.toString());
        
        // // this.despesas.push(despesa);
        // // this.despesasSubject.next(this.despesas);
        return this.http.post<Despesa>(`${this.apiUrl}/Despesa`, despesa);
    }

    editar(despesa: Despesa): Observable<Despesa> {
        return this.http.put<Despesa>(`${this.apiUrl}/Despesa/${despesa.id}`, despesa);
    }

    deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/Despesa/${id}`);
    }
}