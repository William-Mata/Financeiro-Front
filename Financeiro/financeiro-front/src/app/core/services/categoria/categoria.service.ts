import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

    private categoriasDespesas = [
        {
            value: 'Moradia',
            subcategorias: [
                { value: 'Aluguel/Hipoteca' },
                { value: 'Contas de serviços públicos' },
                { value: 'Condomínio' },
                { value: 'Manutenção e reparos' },
            ]
        },
        {
            value: 'Transporte',
            subcategorias: [
                { value: 'Combustível/Gasolina' },
                { value: 'Transporte público' },
                { value: 'Seguro do carro' },
                { value: 'Manutenção do veículo' },
            ]
        },
        {
            value: 'Alimentação',
            subcategorias: [
                { value: 'Compras de supermercado' },
                { value: 'Refeições fora de casa' },
                { value: 'Lanches e petiscos' },
                { value: 'Restaurantes' },
            ]
        },
        {
            value: 'Saúde',
            subcategorias: [
                { value: 'Seguro de saúde' },
                { value: 'Consultas médicas' },
                { value: 'Medicamentos' },
                { value: 'Cuidados dentários' },
            ]
        },
        {
            value: 'Educação',
            subcategorias: [
                { value: 'Mensalidades escolares' },
                { value: 'Material escolar' },
                { value: 'Cursos extracurriculares' },
                { value: 'Empréstimos estudantis' },
            ]
        },
        {
            value: 'Lazer e Entretenimento',
            subcategorias: [
                { value: 'Cinema/Teatro' },
                { value: 'Streaming' },
                { value: 'Viagens' },
                { value: 'Hobbies' },
            ]
        },
        {
            value: 'Finanças Pessoais',
            subcategorias: [
                { value: 'Taxas bancárias' },
                { value: 'Juros cartão de crédito' },
                { value: 'Investimentos' },
                { value: 'Consultoria financeira' },
            ]
        },
        {
            value: 'Vestuário e Acessórios',
            subcategorias: [
                { value: 'Roupas' },
                { value: 'Calçados' },
                { value: 'Acessórios pessoais' },
                { value: 'Lavanderia' },
            ]
        }
    ];

    private categoriasReceitas = [
        {
            value: 'Salário e Renda Principal',
            subcategorias: [
                { value: 'Salário base' },
                { value: 'Comissões/Bônus' },
                { value: 'Freelancer' },
                { value: 'Pensão alimentícia' },
            ]
        },
        {
            value: 'Renda Passiva',
            subcategorias: [
                { value: 'Juros' },
                { value: 'Dividendos' },
                { value: 'Aluguéis' },
                { value: 'Royalties' },
            ]
        },
        {
            value: 'Vendas e Serviços',
            subcategorias: [
                { value: 'Venda de produtos' },
                { value: 'Serviços prestados' },
                { value: 'Lucro de negócios próprios' },
                { value: 'Vendas online' },
            ]
        },
        {
            value: 'Investimentos',
            subcategorias: [
                { value: 'Fundos de investimento' },
                { value: 'Títulos' },
                { value: 'Ganhos de capital' },
                { value: 'Previdência privada' },
            ]
        },
        {
            value: 'Benefícios Sociais',
            subcategorias: [
                { value: 'Seguro-desemprego' },
                { value: 'Bolsa Família' },
                { value: 'Subsídios' },
                { value: 'Aposentadoria' },
            ]
        },
        {
            value: 'Rendas Extra',
            subcategorias: [
                { value: 'Trabalhos temporários' },
                { value: 'Freelancing adicional' },
                { value: 'Vendas de itens usados' },
                { value: 'Presentes' },
            ]
        },
        {
            value: 'Outras Fontes de Renda',
            subcategorias: [
                { value: 'Leilões' },
                { value: 'Royalties de PI' },
                { value: 'Parcerias de negócios' },
                { value: 'Consultorias' },
            ]
        }
    ];

    listarCategoriasDespesas() {
        return this.categoriasDespesas;
    }

    listarCategoriasReceitas() {
        return this.categoriasReceitas;
    }

    buscarCategoriaPorSubCategoriaDespesa(subcategoria?: string) {
        let categoriaEncontrada = undefined;

        if(subcategoria){
            categoriaEncontrada = this.categoriasDespesas.find(c => 
                                        c.subcategorias.some(s => s.value === subcategoria));
        }

        return categoriaEncontrada?.value;
    }

    buscarCategoriaPorSubCategoriaReceita(subcategoria?: string) {
        let categoriaEncontrada = undefined;

        if(subcategoria){
            categoriaEncontrada = this.categoriasReceitas.find(c => 
                                        c.subcategorias.some(s => s.value === subcategoria));
        }

        return categoriaEncontrada?.value;
    }
}