# 2º Dia: Back-end com Node.js
  
  ## Passo a Passo

  ### Criando projeto do servidor:
    1.yarn init -y: 
      *Cria um package.json para as dependências do projeto.
    2.src/server.ts:
      *Vai ser o primeiro arquivo aberto quando precisar executar o servidor.
    3.yarn tsc -init:
      *Cria o arquivo tsconfig.json.
    4.yarn add ts-node-dev -D:
      *executa o servidor e fica observando se há alguma alteração, para pode reiniciar o servidor.
  
  ### Rotas e recursos:
    1. Rotas: Cada rota é um endereço da nossa aplicação:
      Rota para listar usuários:
      * http://localhost:3333/users
    2. Recursos: O que vem depois da url base
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

  ### Configurando conexão com o Banco.

  ### Criando tabelas no banco de dados.

  ### Criação de aulas.

  ### Listagem de aulas.

  ### Criação e total de conexões.