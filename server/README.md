# 2º Dia: Back-end com Node.js

  ## Passo a Passo:

  ### Criando projeto do servidor:

  * Cria um package.json para as dependências do projeto:
      * yarn init -y
  * Vai ser o primeiro arquivo aberto quando precisar executar o servidor:
      * src/server.ts:
  * Cria o arquivo tsconfig.json:
      * yarn tsc -init:
  * executa o servidor e fica observando se há alguma alteração, para pode reiniciar o servidor:
      * yarn add ts-node-dev -D:
      

  ### Rotas e recursos:

  1. Rotas: Cada rota é um endereço da nossa aplicação:
  * Rota para listar usuários:
      * http://localhost:3333/users
  2. Recursos: O que vem depois da url base:
      * https://localhost:3333/users (/users é o recurso)

  ### Métodos HTTP:
  * GET: Buscar ou listar uma informação;
  * POST: Criar alguma nova informação;
  * PUT: Atualizar uma informação existente;
  * DELETE: Deletar uma informação existente;
    
  #### Ferramenta para testar esses métodos http: Insomnia.

  ### Parâmetros:
  * Corpo (Request Body): Dados para criação/atualização de um registro.
  * Route Params: identificar qual recurso eu quero atualizar ou deletar.
  * Query Params: Paginação, filtros, ordenação.

  ### Identificando casos de uso:
  #### Funcionalidades
  ##### Conexões
      
  - Rota para listar o total de conexões realizadas;
  - Rota para criar uma nova conexão (entre aluno e professor);

  ##### Aulas
      
  - Rota para criar uma aula;
  - Rota para listar aulas;
  - Filtrar por matéria, dia da semana e horário;

  ### Configurando conexão com o Banco.

  ### Criando tabelas no banco de dados.

  ### Criação de aulas.

  ### Listagem de aulas.

  ### Criação e total de conexões.