# <span style="background: linear-gradient(to bottom, orange, purple); -webkit-background-clip: text; color: transparent;">**Orientações para o Projeto Financeiro Front**</span> 🚀  

## <span style="background: linear-gradient(to right, orange, purple); -webkit-background-clip: text; color: transparent;">💡 **Introdução**</span>  
Bem-vindo ao guia do projeto **Financeiro Front**! Este documento foi projetado para fornecer orientações claras e práticas para o desenvolvimento e manutenção do projeto, utilizando as melhores práticas no angular.  This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.


---

## <span style="background: linear-gradient(to left, orange, purple); -webkit-background-clip: text; color: transparent;">🧑‍💻 **Padrões de Código**</span>  
Mantenha a qualidade do código seguindo estas diretrizes:  

- Utilize **TSLint** ou **ESLint** para validação.  
- Adote o padrão **camelCase** para variáveis e funções.  
- Use **PascalCase** para componentes e módulos Angular.  

---

## <span style="background: linear-gradient(to right, orange, purple); -webkit-background-clip: text; color: transparent;">🌟 **Boas Práticas**</span>  
Eleve a qualidade do projeto com estas práticas recomendadas:  

- Crie **branches** para cada nova funcionalidade ou correção.  
- Faça **commits pequenos e descritivos**.  
- Revise o código antes de abrir um **pull request**.  
- Utilize **Lazy Loading** para otimizar o carregamento de módulos.  

---


## <span style="background: linear-gradient(to left, orange, purple); -webkit-background-clip: text; color: transparent;">🛠️ **Estrutura do Projeto**</span>  
Organize seu projeto de forma modular e escalável para garantir eficiência e facilidade de manutenção.  

```plaintext
📂 src/
├── 📂 app/
│   ├── 📂 core/         
│   ├── 📂 shared/      
│   ├── 📂 features/    
│   ├── 📂 layout/      
│   └── 📂 pages/        
├── 📂 assets/           
└── 📂 environments/     
```  

- **`core/`**: Serviços globais, interceptors, configurações gerais.  
- **`shared/`**: Componentes, diretivas e pipes reutilizáveis.  
- **`features/`**: Módulos específicos de funcionalidades.  
- **`layout/`**: Componentes de layout (header, footer, sidebar).  
- **`pages/`**: Componentes de páginas principais.  
- **`assets/`**: Arquivos estáticos (imagens, fontes, estilos globais).  
- **`environments/`**: Configurações de ambiente (environment.ts, environment.prod.ts).  

---



## <span style="background: linear-gradient(to right, orange, purple); -webkit-background-clip: text; color: transparent;">🌐 **Gerenciamento de Versões do Node com NVM**</span>  
Gerencie diferentes versões do Node.js com facilidade utilizando o **NVM (Node Version Manager)**.  

1. **Instale o NVM**:  
    Acesse o repositório oficial e siga as instruções: [NVM GitHub](https://github.com/coreybutler/nvm-windows/releases).  

2. **Verifique a instalação**:  
    ```bash  
    nvm --version  
    ```  

3. **Instale a versão necessária** do Node.js:  
    ```bash  
    nvm install <versão>  
    ```  

4. **Use a versão instalada**:  
    ```bash  
    nvm use <versão>  
    ```  

5. **Defina a versão padrão** (opcional):  
    ```bash  
    nvm alias default <versão>  
    ```  

---
## <span style="background: linear-gradient(to left, orange, purple); -webkit-background-clip: text; color: transparent;">📦 **Instalação do Angular CLI**</span>  
O Angular CLI é uma ferramenta essencial para criar, desenvolver e manter aplicações Angular.  

1. **Instale o Angular CLI globalmente**:  
    ```bash  
    npm install -g @angular/cli  
    ```  

2. **Verifique a instalação**:  
    ```bash  
    ng version  
    ```  

3. **Atualize o Angular CLI** (se necessário):  
    ```bash  
    npm install -g @angular/cli@latest  
    ```  

---  
## <span style="background: linear-gradient(to right, orange, purple); -webkit-background-clip: text; color: transparent;">⚙️ **Configuração do Ambiente**</span>  
Prepare seu ambiente de desenvolvimento para iniciar o projeto:  

1. Certifique-se de ter o **Node.js** e o **Angular CLI** instalados.  
2. Instale as dependências do projeto:  
    ```bash  
    npm install  
    ```  

3. Building

    Executar o build do projeto:

    ```bash
    ng build
    ```

    O comando irá compilar o seu projeto e armazenar os artefatos de compilação no diretório dist/. Por padrão, a compilação de produção otimiza sua aplicação para desempenho e velocidade.

3. Inicie o servidor de desenvolvimento:  
    ```bash  
    ng serve  
    ```  

    Uma vez que o servidor esteja em execução, abra o seu navegador e acesse http://localhost:4200/. A aplicação será recarregada automaticamente sempre que você modificar qualquer um dos arquivos fonte.


4. Code Scaffolding

    O Angular CLI inclui ferramentas poderosas de scaffolding de código. Para gerar um novo componente, execute:

    ```bash
    ng generate component component-name
    ```

    Para uma lista completa de esquemas disponíveis (como components, directives ou pipes), execute:

    ```bash
    ng generate --help
    ```

## <span style="background: linear-gradient(to right, orange, purple); -webkit-background-clip: text; color: transparent;">🧪 **Executando Testes**</span>  

Para executar testes unitários com o [Karma](https://karma-runner.github.io), utilize o seguinte comando:  

```bash  
ng test  
```  

Para executar testes end-to-end (e2e), utilize o seguinte comando:

```bash
ng e2e
```

Estes comandos executará os testes configurados no projeto e exibirá os resultados no terminal ou em uma interface gráfica, dependendo da configuração.  

## <span style="background: linear-gradient(to left, orange, purple); -webkit-background-clip: text; color: transparent;">⚡ **Recursos Adicionais**<span>

Para mais informações em como usar o Angular CLI, incluindo detalhes e comandos, acesse a pagina do [Angular CLI ](https://angular.dev/tools/cli).

---
