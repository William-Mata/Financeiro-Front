import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BancoService {

    private bancos = [
        {value: 1, label: "Banco do Brasil", iconPath: "..\\..\\assets\\img\\bancos\\banco-do-brasil.png"},
        {value: 2, label: "Caixa Econômica Federal", iconPath: "..\\..\\assets\\img\\bancos\\caixa-economica-federal.png"},
        {value: 3, label: "Banco Bradesco", iconPath: "..\\..\\assets\\img\\bancos\\bradesco.png"},
        {value: 4, label: "Itaú Unibanco", iconPath: "..\\..\\assets\\img\\bancos\\itau.png"},
        {value: 5, label: "Santander Brasil", iconPath: "..\\..\\assets\\img\\bancos\\santander.png"},
        {value: 6, label: "Banco Inter", iconPath: "..\\..\\assets\\img\\bancos\\inter.png"},
        {value: 7, label: "Nubank", iconPath: "..\\..\\assets\\img\\bancos\\nubank.png"},
        {value: 8, label: "Banco Original", iconPath: "..\\..\\assets\\img\\bancos\\banco-original.png"},
        // {value: 9, label: "Next (Banco Bradesco)", iconPath: ""},
        // {value: 10, label: "Banco Neon", iconPath: ""},
        // {value: 11, label: "Banco Safra", iconPath: ""},
        {value: 12, label: "PagBank (PagSeguro)", iconPath: "..\\..\\assets\\img\\bancos\\pagseguro.png"},
        {value: 13, label: "C6 Bank", iconPath: "..\\..\\assets\\img\\bancos\\c6-bank.png"},
        {value: 14, label: "Banco PAN", iconPath: "..\\..\\assets\\img\\bancos\\pan.png"},
        // {value: 15, label: "Agibank", iconPath: ""},
        // {value: 16, label: "BS2 (Banco Bonsucesso)", iconPath: ""},
        {value: 17, label: "Mercado Pago (Mercado Livre)", iconPath: "..\\..\\assets\\img\\bancos\\mercado-pago.png"},
        {value: 18, label: "Banco BTG Pactual", iconPath: "..\\..\\assets\\img\\bancos\\btg-pactual.png"},
        // {value: 19, label: "Banco Modal", iconPath: ""},
        // {value: 20, label: "Banco Daycoval", iconPath: ""},
        {value: 21, label: "Banco do Estado do Rio Grande do Sul (Banrisul)", iconPath: "..\\..\\assets\\img\\bancos\\banrisul.png"},
        // {value: 22, label: "Banco do Nordeste do Brasil (BNB)", iconPath: ""},
        // {value: 23, label: "Banco Pine", iconPath: ""},
        // {value: 24, label: "Banco do Estado de São Paulo (Banco do Estado de São Paulo)", iconPath: ""},
        // {value: 25, label: "Banco ABC Brasil", iconPath: ""},
        // {value: 26, label: "Banco Votorantim", iconPath: ""},
        {value: 27, label: "Banco Original", iconPath: "..\\..\\assets\\img\\bancos\\banco-original.png"},
        // {value: 28, label: "Banco BMG", iconPath: ""},
        // {value: 29, label: "Banco Fibra", iconPath: ""},
        // {value: 30, label: "Banco Renner", iconPath: ""},
        // {value: 31, label: "Banco Volkswagen", iconPath: ""},
        // {value: 32, label: "Banco Ourinvest", iconPath: ""},
        // {value: 33, label: "Banco Digio", iconPath: ""},
        // {value: 34, label: "Banco Topázio", iconPath: ""},
        // {value: 35, label: "Banco Rendimento", iconPath: ""},
        // {value: 36, label: "Banco Cacique", iconPath: ""},
        // {value: 37, label: "Banco Renner", iconPath: ""},
        // {value: 38, label: "Banco Regional de Brasília (BRB)", iconPath: ""},
        // {value: 39, label: "Banco Mercantil do Brasil", iconPath: ""},
        // {value: 40, label: "Banco Industrial do Brasil (BIB)", iconPath: ""},
        // {value: 41, label: "Banco Paulista", iconPath: ""},
        // {value: 42, label: "Banco Daycoval", iconPath: ""},
        // {value: 43, label: "Banco Intermedium (Banco Inter)", iconPath: ""},
        // {value: 44, label: "Banco do Estado de Sergipe (Banese)", iconPath: ""},
        // {value: 45, label: "Banco do Estado do Espírito Santo (Banestes)", iconPath: ""},
        // {value: 46, label: "Banco do Estado de Santa Catarina (Besc)", iconPath: ""},
        // {value: 47, label: "Banco de Brasília (BRB)", iconPath: ""},
        // {value: 48, label: "Banco Panamericano", iconPath: ""},
        // {value: 49, label: "Banco Triângulo", iconPath: ""},
        // {value: 50, label: "Banco da Amazônia (Basa)", iconPath: ""},
        {value: 51, label: "PicPay", iconPath: "..\\..\\assets\\img\\bancos\\picpay.png"},
        {value: 52, label: "Will Bank", iconPath: "..\\..\\assets\\img\\bancos\\will-bank.png"},
        {value: 53, label: "XP", iconPath: "..\\..\\assets\\img\\bancos\\xp.png"},
        {value: 54, label: "Stone", iconPath: "..\\..\\assets\\img\\bancos\\stone.png"},
        {value: 55, label: "Sicoob", iconPath: "..\\..\\assets\\img\\bancos\\sicoob.png"},
        {value: 56, label: "Neon", iconPath: "..\\..\\assets\\img\\bancos\\neon.png"},
    ]

    listarBancos() {
        return this.bancos;
    }
}