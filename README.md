# Loja de Itens Medievais API

## Descrição do Projeto
Bem-vindo ao repositório do projeto Trybesmith! Neste projeto, foi desenvolvida uma loja de itens medievais em formato de API utilizando Typescript. A aplicação abrange todas as camadas (Models, Service e Controllers), permitindo operações CRUD (Create, Read, Update, Delete) em um banco de dados MySQL. A seguir, são apresentados os requisitos atendidos:

### Requisitos

1. **Cadastro de Produtos:**
   - Endpoint acessível via (/products);
   - Cadastro de produtos na tabela "products" do banco de dados;
   - Estrutura de entrada:
     ```json
     {
       "name": "Espada longa",
       "amount": "30 peças de ouro"
     }
     ```

2. **Listagem de Produtos:**
   - Endpoint acessível via (/products);
   - Verificações adicionais [detalhe aqui as verificações adicionais].

3. **Cadastro de Pessoas Usuárias:**
   - Endpoint acessível via (/users);
   - Cadastro de informações na tabela "users" do banco de dados;
   - Estrutura de entrada:
     ```json
     {
       "username": "MAX",
       "vocation": "swordsman",
       "level": 10,
       "password": "SavingPeople"
     }
     ```
   - Verificações adicionais [detalhe aqui as verificações adicionais].

4. **Listagem de Pedidos:**
   - Endpoint acessível via (/orders);
   - Retorna todos os pedidos e os IDs dos produtos associados;
   - Utilização da função de agregação JSON_ARRAYAGG do MySQL;
   - Verificações adicionais [detalhe aqui as verificações adicionais].

### Habilidades Técnicas

- **Linguagens:**
  - Typescript, SQL.

- **Tecnologias:**
  - Node.js, Express, MySQL.

- **Outras Habilidades:**
  - Desenvolvimento de API REST, Manipulação de Banco de Dados, Typescript.

